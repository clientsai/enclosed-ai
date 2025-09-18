import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/google/callback`
);

const SCOPES = [
  'https://www.googleapis.com/auth/calendar.readonly',
  'https://www.googleapis.com/auth/calendar.events',
];

export function getAuthUrl(state?: string) {
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent',
    state: state || '',
  });
}

export async function getTokens(code: string) {
  const { tokens } = await oauth2Client.getToken(code);
  return tokens;
}

export function setCredentials(tokens: any) {
  oauth2Client.setCredentials(tokens);
  return oauth2Client;
}

export async function listEvents(auth: any) {
  const calendar = google.calendar({ version: 'v3', auth });

  const now = new Date();
  const weekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

  try {
    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: now.toISOString(),
      timeMax: weekFromNow.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    return response.data.items || [];
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return [];
  }
}

export async function createEvent(auth: any, eventDetails: any) {
  const calendar = google.calendar({ version: 'v3', auth });

  const event = {
    summary: eventDetails.title,
    description: eventDetails.description,
    start: {
      dateTime: eventDetails.startTime,
      timeZone: eventDetails.timeZone || 'America/Los_Angeles',
    },
    end: {
      dateTime: eventDetails.endTime,
      timeZone: eventDetails.timeZone || 'America/Los_Angeles',
    },
    attendees: eventDetails.attendees || [],
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 },
        { method: 'popup', minutes: 30 },
      ],
    },
  };

  try {
    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
    });

    return response.data;
  } catch (error) {
    console.error('Error creating calendar event:', error);
    throw error;
  }
}

export async function getAvailability(auth: any) {
  const calendar = google.calendar({ version: 'v3', auth });

  const now = new Date();
  const weekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

  try {
    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin: now.toISOString(),
        timeMax: weekFromNow.toISOString(),
        items: [{ id: 'primary' }],
      },
    });

    const busy = response.data.calendars?.primary?.busy || [];

    // Calculate available slots (9 AM - 6 PM working hours)
    const availableSlots = [];
    const workingHourStart = 9; // 9 AM
    const workingHourEnd = 18; // 6 PM

    for (let day = 0; day < 7; day++) {
      const currentDate = new Date(now);
      currentDate.setDate(currentDate.getDate() + day);
      currentDate.setHours(workingHourStart, 0, 0, 0);

      const endOfDay = new Date(currentDate);
      endOfDay.setHours(workingHourEnd, 0, 0, 0);

      // Find available slots for this day
      let currentSlotStart = currentDate;

      for (const busySlot of busy) {
        const busyStart = new Date(busySlot.start!);
        const busyEnd = new Date(busySlot.end!);

        if (busyStart >= endOfDay) break;
        if (busyEnd <= currentSlotStart) continue;

        if (busyStart > currentSlotStart) {
          availableSlots.push({
            start: currentSlotStart.toISOString(),
            end: busyStart.toISOString(),
          });
        }

        currentSlotStart = busyEnd > currentSlotStart ? busyEnd : currentSlotStart;
      }

      if (currentSlotStart < endOfDay) {
        availableSlots.push({
          start: currentSlotStart.toISOString(),
          end: endOfDay.toISOString(),
        });
      }
    }

    return availableSlots;
  } catch (error) {
    console.error('Error checking availability:', error);
    return [];
  }
}

// Function to schedule follow-up for direct mail campaign
export async function scheduleFollowUp(
  auth: any,
  campaignName: string,
  recipientName: string,
  followUpDate: Date,
  notes?: string
) {
  const endTime = new Date(followUpDate.getTime() + 30 * 60 * 1000); // 30 minute meeting

  return createEvent(auth, {
    title: `Follow-up: ${campaignName} - ${recipientName}`,
    description: `Direct mail follow-up for campaign: ${campaignName}\n\nRecipient: ${recipientName}\n\nNotes: ${notes || 'Schedule a call or send follow-up email'}`,
    startTime: followUpDate.toISOString(),
    endTime: endTime.toISOString(),
  });
}