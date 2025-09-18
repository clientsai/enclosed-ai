# 🚀 EXACT Stripe Setup Instructions for Enclosed.AI

## ⚠️ IMPORTANT: Your app will be hosted at `https://enclosed.ai` (no subdomain)

---

## 📋 STEP 1: Create Products & Get Price IDs

Go to: **https://dashboard.stripe.com/products**

You need to create 3 products with the EXACT Product IDs you specified:

### Product 1: Starter Plan
1. Click **"+ Add product"**
2. Fill in:
   - **Name**: `Starter Plan`
   - **Description**: `50 personalized direct mail letters per month`
3. In Pricing section:
   - **Price**: `99.99`
   - **Currency**: `USD`
   - **Billing period**: `Monthly`
4. Click **"Save product"**
5. **IMPORTANT**: After saving, you'll see a Price ID that looks like `price_XXXXXXXXXXXXX`
6. **Copy this Price ID** - you'll need it!

### Product 2: Premium Plan
1. Click **"+ Add product"**
2. Fill in:
   - **Name**: `Premium Plan`
   - **Description**: `100 AI-personalized letters per month with advanced features`
3. In Pricing section:
   - **Price**: `299.99`
   - **Currency**: `USD`
   - **Billing period**: `Monthly`
4. Click **"Save product"**
5. **Copy the Price ID** (looks like `price_XXXXXXXXXXXXX`)

### Product 3: Letter Bundle (Add-on)
1. Click **"+ Add product"**
2. Fill in:
   - **Name**: `100 Letter Bundle`
   - **Description**: `Add 100 additional letters to your account`
3. In Pricing section:
   - **Price**: `200.00`
   - **Currency**: `USD`
   - **Payment type**: `One time`
4. Click **"Save product"**
5. **Copy the Price ID** (looks like `price_XXXXXXXXXXXXX`)

---

## 📝 STEP 2: Note Your Price IDs

After creating the products, you should have 3 Price IDs:

```
Starter Plan Price ID: price_________________
Premium Plan Price ID: price_________________
Letter Bundle Price ID: price_________________
```

---

## 🔗 STEP 3: Set Up Webhook Endpoint

Go to: **https://dashboard.stripe.com/webhooks**

1. Click **"+ Add endpoint"**

2. Fill in EXACTLY:
   - **Endpoint URL**: `https://enclosed.ai/api/stripe/webhook`
   - ⚠️ Make sure it's HTTPS and no trailing slash!

3. Under **"Select events"**, click **"+ Select events"**

4. Search and select these EXACT events:
   - ✅ `checkout.session.completed`
   - ✅ `customer.subscription.created`
   - ✅ `customer.subscription.updated`
   - ✅ `customer.subscription.deleted`
   - ✅ `invoice.payment_succeeded`
   - ✅ `invoice.payment_failed`

5. Click **"Add events"**

6. Click **"Add endpoint"**

7. **IMPORTANT**: After creating, you'll see a **"Signing secret"**
   - Click **"Reveal"** under Signing secret
   - It looks like: `whsec_XXXXXXXXXXXXXXXXX`
   - **Copy this secret** - you need it!

---

## 💻 STEP 4: Update Your Code

Run this command in your terminal:

```bash
cd /Users/ktown/Desktop/enclosed-ai
node scripts/verify-stripe.js
```

When prompted, paste:
1. The 3 Price IDs from Step 1
2. The Webhook Signing Secret from Step 3

---

## ✅ STEP 5: Verify Everything

Your webhook URL should be: **`https://enclosed.ai/api/stripe/webhook`**

Test it by:
1. Go to your webhook in Stripe Dashboard
2. Click **"Send test webhook"**
3. Select `checkout.session.completed`
4. Click **"Send test webhook"**

You should see a success response!

---

## 🎯 FINAL CHECKLIST

- [ ] Created Starter Plan product (Price ID: ____________)
- [ ] Created Premium Plan product (Price ID: ____________)
- [ ] Created Letter Bundle product (Price ID: ____________)
- [ ] Added webhook endpoint: `https://enclosed.ai/api/stripe/webhook`
- [ ] Selected all 6 webhook events
- [ ] Copied webhook signing secret (whsec___________)
- [ ] Updated code with `node scripts/verify-stripe.js`

---

## 🚨 IMPORTANT NOTES

1. **Your production URL is**: `https://enclosed.ai` (NO subdomain, NO /app, just the root domain)

2. **Webhook endpoint URL**: `https://enclosed.ai/api/stripe/webhook`

3. **Success redirect URL**: `https://enclosed.ai/billing?success=true`

4. **Cancel redirect URL**: `https://enclosed.ai/pricing?canceled=true`

5. Make sure to use **HTTPS** everywhere (not HTTP)

---

## 📞 Need Help?

If any step is unclear, the key things you need are:

1. **3 Price IDs** (start with `price_`)
2. **1 Webhook Secret** (starts with `whsec_`)
3. **Webhook URL**: `https://enclosed.ai/api/stripe/webhook`

That's it! Once you have these, run the setup script and you're done! 🎉