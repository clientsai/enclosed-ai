const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n=== Stripe Setup Verification ===\n');

const questions = [
  {
    key: 'starter_price_id',
    question: 'Enter the Price ID for Starter Plan ($99.99/mo): ',
    default: 'price_1QlDCfCXLbEz3Hk6ELsKJmHp'
  },
  {
    key: 'premium_price_id',
    question: 'Enter the Price ID for Premium Plan ($299.99/mo): ',
    default: 'price_1QlDEqCXLbEz3Hk6hJfPQTXr'
  },
  {
    key: 'addon_price_id',
    question: 'Enter the Price ID for 100 Letter Bundle ($200): ',
    default: 'price_1QlDGLCXLbEz3Hk6xYwZaKLm'
  },
  {
    key: 'webhook_secret',
    question: 'Enter the Webhook Signing Secret (starts with whsec_): ',
    default: ''
  }
];

let answers = {};
let currentIndex = 0;

function askQuestion() {
  if (currentIndex >= questions.length) {
    updateFiles();
    return;
  }

  const q = questions[currentIndex];
  const prompt = q.default ? `${q.question}[${q.default}] ` : q.question;

  rl.question(prompt, (answer) => {
    answers[q.key] = answer || q.default;
    currentIndex++;
    askQuestion();
  });
}

function updateFiles() {
  console.log('\nUpdating configuration files...\n');

  // Update .env.local
  const envPath = path.join(__dirname, '..', '.env.local');
  let envContent = fs.readFileSync(envPath, 'utf8');

  if (answers.webhook_secret) {
    envContent = envContent.replace(
      'STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here',
      `STRIPE_WEBHOOK_SECRET=${answers.webhook_secret}`
    );
  }

  fs.writeFileSync(envPath, envContent);

  // Update stripe.ts
  const stripePath = path.join(__dirname, '..', 'src', 'lib', 'stripe.ts');
  let stripeContent = fs.readFileSync(stripePath, 'utf8');

  stripeContent = stripeContent.replace(
    "priceId: 'price_1QlDCfCXLbEz3Hk6ELsKJmHp',",
    `priceId: '${answers.starter_price_id}',`
  );
  stripeContent = stripeContent.replace(
    "priceId: 'price_1QlDEqCXLbEz3Hk6hJfPQTXr',",
    `priceId: '${answers.premium_price_id}',`
  );
  stripeContent = stripeContent.replace(
    "priceId: 'price_1QlDGLCXLbEz3Hk6xYwZaKLm',",
    `priceId: '${answers.addon_price_id}',`
  );

  fs.writeFileSync(stripePath, stripeContent);

  console.log('✅ Configuration updated successfully!');
  console.log('\nNext steps:');
  console.log('1. Run: npm run build');
  console.log('2. Run: npm run start');
  console.log('3. Test the subscription flow at http://localhost:3000/pricing');

  rl.close();
}

console.log('Please check your Stripe Dashboard and provide the following:\n');
askQuestion();