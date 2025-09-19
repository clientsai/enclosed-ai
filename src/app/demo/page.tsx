import Link from "next/link";
import Logo from "@/components/Logo";
export const metadata = {
  title: "Schedule a Demo - Enclosed.AI | Book Your Personalized Demo",
  description:
    "Book a personalized demo to see how Enclosed.AI can work for your business. Get a custom walkthrough of our direct mail marketing platform.",
};
export default function DemoPage() {
  return (
    <div >
      {/* Header */}
      <div >
        {/* Hero Section */}
        <div >
          <div >
            <div ></div>
            <div ></div>
            <div ></div>
          </div>
          <div >
            <div >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h1 >
              Schedule a
              <span > Demo</span>
            </h1>
            <p >
              Book a personalized demo to see how Enclosed.AI can work for your
              business. Get a custom walkthrough tailored to your needs.
            </p>
            <div >
              <Link
                href="#book-demo"
              >
                Book Your Demo
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
        {/* Demo Benefits */}
        <div >
          <h2 >
            Why Book a Demo?
          </h2>
          <div >
            {/* Personalized Experience */}
            <div >
              <div >
                <div >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 >
                  Personalized Experience
                </h3>
              </div>
              <p >
                Get a demo tailored to your specific business needs, industry,
                and marketing goals. See exactly how Enclosed.AI can solve your
                unique challenges.
              </p>
            </div>
            {/* Live Q&A */}
            <div >
              <div >
                <div >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 >
                  Live Q&A
                </h3>
              </div>
              <p >
                Ask questions in real-time and get immediate answers from our
                experts. No waiting for email responses or searching through
                documentation.
              </p>
            </div>
            {/* See It In Action */}
            <div >
              <div >
                <div >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 >
                  See It In Action
                </h3>
              </div>
              <p >
                Watch live demonstrations of key features, workflows, and
                capabilities. See the platform in action with real data and
                scenarios.
              </p>
            </div>
          </div>
        </div>
        {/* Demo Form */}
        <div id="book-demo" >
          <div >
            <div >
              <h2 >
                Book Your Demo
              </h2>
              <form >
                <div >
                  <div>
                    <label
                      htmlFor="firstName"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                    />
                  </div>
                </div>
                <div >
                  <div>
                    <label
                      htmlFor="email"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                    />
                  </div>
                </div>
                <div >
                  <div>
                    <label
                      htmlFor="company"
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="jobTitle"
                    >
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="industry"
                  >
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                  >
                    <option value="">Select your industry</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="education">Education</option>
                    <option value="nonprofit">Non-profit</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="companySize"
                  >
                    Company Size
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="preferredDate"
                  >
                    Preferred Demo Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                  />
                </div>
                <div>
                  <label
                    htmlFor="preferredTime"
                  >
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                  >
                    <option value="">Select preferred time</option>
                    <option value="9am">9:00 AM</option>
                    <option value="10am">10:00 AM</option>
                    <option value="11am">11:00 AM</option>
                    <option value="12pm">12:00 PM</option>
                    <option value="1pm">1:00 PM</option>
                    <option value="2pm">2:00 PM</option>
                    <option value="3pm">3:00 PM</option>
                    <option value="4pm">4:00 PM</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                  >
                    Tell us about your goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="What are you hoping to achieve with direct mail marketing? Any specific challenges you're facing?"
                  ></textarea>
                </div>
                <div >
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    required
                  />
                  <label htmlFor="agree" >
                    I agree to receive communications from Enclosed.AI about
                    this demo and related services.
                  </label>
                </div>
                <div >
                  <button
                    type="submit"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Schedule My Demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* What to Expect */}
        <div >
          <h2 >
            What to Expect
          </h2>
          <div >
            {/* Step 1 */}
            <div >
              <div >
                <span >1</span>
              </div>
              <h3 >
                Confirmation
              </h3>
              <p >
                You'll receive a confirmation email with your demo details and
                calendar invite.
              </p>
            </div>
            {/* Step 2 */}
            <div >
              <div >
                <span >2</span>
              </div>
              <h3 >
                Preparation
              </h3>
              <p >
                We'll prepare a customized demo based on your business needs and
                goals.
              </p>
            </div>
            {/* Step 3 */}
            <div >
              <div >
                <span >3</span>
              </div>
              <h3 >
                Demo Session
              </h3>
              <p >
                Join your personalized demo session with our product experts and
                ask questions.
              </p>
            </div>
            {/* Step 4 */}
            <div >
              <div >
                <span >4</span>
              </div>
              <h3 >
                Follow-up
              </h3>
              <p >
                We'll follow up with next steps, pricing information, and
                implementation support.
              </p>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div >
          <div >
            <div ></div>
            <div ></div>
            <div ></div>
          </div>
          <div >
            <h2 >
              Ready to Transform Your Marketing?
            </h2>
            <p >
              Join thousands of businesses already using Enclosed.AI to create
              personalized, high-converting direct mail campaigns.
            </p>
            <div >
              <Link
                href="#book-demo"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Book Demo Now
              </Link>
              <Link
                href="/contact"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer >
        <div >
          <div >
            <div>
              <Logo
                size="md"
                showText={true}
                linkToHome={false}
              />
              <p >
                Direct mail marketing powered by artificial intelligence
              </p>
            </div>
            <div>
              <h3 >Product</h3>
              <ul >
                <li>
                  <Link
                    href="/features"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/integrations"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/api"
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 >Company</h3>
              <ul >
                <li>
                  <Link
                    href="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 >Support</h3>
              <ul >
                <li>
                  <Link
                    href="/help"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div >
            <p>&copy; 2024 Enclosed.AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}