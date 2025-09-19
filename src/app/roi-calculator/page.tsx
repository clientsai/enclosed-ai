"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import {
  Section,
  Grid,
  Flex,
  H1,
  H2,
  H3,
  H4,
  Text,
  Button,
  Card,
  Badge,
  Alert,
} from "@/components/ui";
export default function ROICalculatorPage() {
  const [inputs, setInputs] = useState({
    mailPieces: 1000,
    costPerPiece: 0.85,
    responseRate: 2.5,
    averageOrderValue: 150,
    conversionRate: 15,
    designCosts: 500,
    listCosts: 200,
    otherCosts: 0,
  });
  const [results, setResults] = useState({
    totalCost: 0,
    totalResponses: 0,
    totalConversions: 0,
    totalRevenue: 0,
    roi: 0,
    profit: 0,
    costPerResponse: 0,
    costPerConversion: 0,
    breakEvenResponseRate: 0,
  });
  useEffect(() => {
    calculateROI();
  }, [inputs]);
  const calculateROI = () => {
    const mailCost = inputs.mailPieces * inputs.costPerPiece;
    const totalCost = mailCost + inputs.designCosts + inputs.listCosts + inputs.otherCosts;
    const totalResponses = (inputs.mailPieces * inputs.responseRate) / 100;
    const totalConversions = (totalResponses * inputs.conversionRate) / 100;
    const totalRevenue = totalConversions * inputs.averageOrderValue;
    const profit = totalRevenue - totalCost;
    const roi = totalCost > 0 ? ((profit / totalCost) * 100) : 0;
    const costPerResponse = totalResponses > 0 ? totalCost / totalResponses : 0;
    const costPerConversion = totalConversions > 0 ? totalCost / totalConversions : 0;
    const breakEvenResponseRate = inputs.averageOrderValue > 0 && inputs.conversionRate > 0
      ? (totalCost / (inputs.mailPieces * (inputs.averageOrderValue * inputs.conversionRate / 100))) * 100
      : 0;
    setResults({
      totalCost: Math.round(totalCost),
      totalResponses: Math.round(totalResponses),
      totalConversions: Math.round(totalConversions),
      totalRevenue: Math.round(totalRevenue),
      roi: Math.round(roi * 100) / 100,
      profit: Math.round(profit),
      costPerResponse: Math.round(costPerResponse * 100) / 100,
      costPerConversion: Math.round(costPerConversion * 100) / 100,
      breakEvenResponseRate: Math.round(breakEvenResponseRate * 100) / 100,
    });
  };
  const handleInputChange = (field: string, value: string) => {
    const numValue = parseFloat(value) || 0;
    setInputs(prev => ({
      ...prev,
      [field]: numValue,
    }));
  };
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };
  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };
  const industryBenchmarks = [
    { industry: "Real Estate", responseRate: "3.0-5.0%", avgOrderValue: "$2,500", notes: "High-value transactions, longer sales cycles" },
    { industry: "Financial Services", responseRate: "2.5-4.0%", avgOrderValue: "$1,200", notes: "Trust-driven, compliance-sensitive" },
    { industry: "E-commerce", responseRate: "1.5-3.5%", avgOrderValue: "$85", notes: "Volume-based, quick conversions" },
    { industry: "B2B Services", responseRate: "2.0-4.5%", avgOrderValue: "$3,500", notes: "Relationship-focused, longer cycles" },
    { industry: "Healthcare", responseRate: "2.8-5.2%", avgOrderValue: "$650", notes: "Regulated, trust-based marketing" },
    { industry: "Automotive", responseRate: "1.8-3.2%", avgOrderValue: "$18,500", notes: "High-value, seasonal variations" },
  ];
  return (
    <div >
      {/* Header */}
      {/* Hero Section */}
      <Section >
        <Flex direction="col" gap={6}>
          <Badge>Free Calculator</Badge>
          <H1>
            Calculate Your Direct Mail ROI
          </H1>
          <Text size="lg" >
            Make data-driven decisions about your direct mail campaigns. Our comprehensive ROI calculator helps you estimate costs, responses, and returns before you invest. Input your campaign parameters below and see projected results instantly.
          </Text>
        </Flex>
      </Section>
      {/* Calculator Section */}
      <Section>
        <div >
          <Grid cols={2} >
            {/* Input Panel */}
            <Card >
              <Flex direction="col" gap={6}>
                <H3>Campaign Parameters</H3>
                <div >
                  {/* Campaign Details */}
                  <div>
                    <h4 >Campaign Details</h4>
                    <div >
                      <div>
                        <label >
                          Number of Mail Pieces
                        </label>
                        <input
                          type="number"
                          value={inputs.mailPieces}
                          onChange={(e) => handleInputChange('mailPieces', e.target.value)}
                          min="1"
                        />
                      </div>
                      <div>
                        <label >
                          Cost per Mail Piece ($)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={inputs.costPerPiece}
                          onChange={(e) => handleInputChange('costPerPiece', e.target.value)}
                          min="0"
                        />
                      </div>
                      <div>
                        <label >
                          Expected Response Rate (%)
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          value={inputs.responseRate}
                          onChange={(e) => handleInputChange('responseRate', e.target.value)}
                          min="0"
                          max="100"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Revenue Details */}
                  <div>
                    <h4 >Revenue Details</h4>
                    <div >
                      <div>
                        <label >
                          Average Order Value ($)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={inputs.averageOrderValue}
                          onChange={(e) => handleInputChange('averageOrderValue', e.target.value)}
                          min="0"
                        />
                      </div>
                      <div>
                        <label >
                          Conversion Rate (% of responses that buy)
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          value={inputs.conversionRate}
                          onChange={(e) => handleInputChange('conversionRate', e.target.value)}
                          min="0"
                          max="100"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Additional Costs */}
                  <div>
                    <h4 >Additional Costs</h4>
                    <div >
                      <div>
                        <label >
                          Design & Creative Costs ($)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={inputs.designCosts}
                          onChange={(e) => handleInputChange('designCosts', e.target.value)}
                          min="0"
                        />
                      </div>
                      <div>
                        <label >
                          List Acquisition Costs ($)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={inputs.listCosts}
                          onChange={(e) => handleInputChange('listCosts', e.target.value)}
                          min="0"
                        />
                      </div>
                      <div>
                        <label >
                          Other Costs ($)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={inputs.otherCosts}
                          onChange={(e) => handleInputChange('otherCosts', e.target.value)}
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Flex>
            </Card>
            {/* Results Panel */}
            <Card >
              <Flex direction="col" gap={6}>
                <H3>Projected Results</H3>
                {/* Key Metrics */}
                <div >
                  <div >
                    <div >
                      {formatCurrency(results.totalRevenue)}
                    </div>
                    <div >Total Revenue</div>
                  </div>
                  <div >
                    <div >
                      {formatCurrency(results.totalCost)}
                    </div>
                    <div >Total Cost</div>
                  </div>
                  <div >
                    <div className={`text-xl md:text-2xl font-bold ${results.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {results.roi >= 0 ? '+' : ''}{results.roi}%
                    </div>
                    <div >ROI</div>
                  </div>
                  <div >
                    <div className={`text-xl md:text-2xl font-bold ${results.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatCurrency(results.profit)}
                    </div>
                    <div >Profit/Loss</div>
                  </div>
                </div>
                {/* Detailed Metrics */}
                <div >
                  <div >
                    <span >Expected Responses</span>
                    <span >{formatNumber(results.totalResponses)}</span>
                  </div>
                  <div >
                    <span >Expected Conversions</span>
                    <span >{formatNumber(results.totalConversions)}</span>
                  </div>
                  <div >
                    <span >Cost per Response</span>
                    <span >{formatCurrency(results.costPerResponse)}</span>
                  </div>
                  <div >
                    <span >Cost per Conversion</span>
                    <span >{formatCurrency(results.costPerConversion)}</span>
                  </div>
                  <div >
                    <span >Break-even Response Rate</span>
                    <span >{results.breakEvenResponseRate}%</span>
                  </div>
                </div>
                {/* ROI Interpretation */}
                <div >
                  {results.roi >= 300 && (
                    <Alert variant="success">
                      <strong>Excellent ROI!</strong> This campaign shows strong potential for profitability with a {results.roi}% return.
                    </Alert>
                  )}
                  {results.roi >= 100 && results.roi < 300 && (
                    <Alert variant="info">
                      <strong>Good ROI.</strong> This campaign should be profitable with a {results.roi}% return. Consider optimizing to increase returns further.
                    </Alert>
                  )}
                  {results.roi >= 0 && results.roi < 100 && (
                    <Alert variant="warning">
                      <strong>Low ROI.</strong> While profitable, consider improving response rates or reducing costs to increase returns.
                    </Alert>
                  )}
                  {results.roi < 0 && (
                    <Alert variant="error">
                      <strong>Negative ROI.</strong> This campaign may result in a loss. Consider adjusting parameters or testing with a smaller batch first.
                    </Alert>
                  )}
                </div>
              </Flex>
            </Card>
          </Grid>
        </div>
      </Section>
      {/* Industry Benchmarks */}
      <Section >
        <Flex direction="col" gap={8}>
          <div >
            <H2>Industry Benchmarks</H2>
            <Text size="lg" >
              Compare your projections with industry standards to set realistic expectations and identify opportunities for improvement.
            </Text>
          </div>
          <div >
            <table >
              <thead >
                <tr>
                  <th >
                    Industry
                  </th>
                  <th >
                    Response Rate
                  </th>
                  <th >
                    Avg Order Value
                  </th>
                  <th >
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody >
                {industryBenchmarks.map((benchmark, index) => (
                  <tr key={index} >
                    <td >
                      {benchmark.industry}
                    </td>
                    <td >
                      {benchmark.responseRate}
                    </td>
                    <td >
                      {benchmark.avgOrderValue}
                    </td>
                    <td >
                      {benchmark.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Flex>
      </Section>
      {/* Tips Section */}
      <Section>
        <Flex direction="col" gap={8}>
          <div >
            <H2>Optimization Tips</H2>
            <Text size="lg" >
              Maximize your direct mail ROI with these proven strategies
            </Text>
          </div>
          <Grid cols={3}>
            <Card >
              <Flex direction="col" gap={4}>
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <H4>Improve Response Rates</H4>
                <p >
                  Use personalization, compelling offers, clear calls-to-action, and professional design to increase response rates by 20-40%.
                </p>
              </Flex>
            </Card>
            <Card >
              <Flex direction="col" gap={4}>
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <H4>Reduce Costs</H4>
                <p >
                  Optimize mail formats, negotiate volume discounts, and use efficient targeting to reduce cost per piece by 15-30%.
                </p>
              </Flex>
            </Card>
            <Card >
              <Flex direction="col" gap={4}>
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <H4>Increase Conversions</H4>
                <p >
                  Streamline your sales process, provide multiple response options, and follow up promptly to boost conversion rates.
                </p>
              </Flex>
            </Card>
          </Grid>
        </Flex>
      </Section>
      {/* CTA Section */}
      <Section >
        <Flex direction="col" gap={6}>
          <H2 >
            Ready to Launch Your Campaign?
          </H2>
          <Text size="lg" >
            Start your direct mail campaign with Enclosed.AI and achieve the ROI you've calculated. Our AI-powered platform helps you exceed industry benchmarks.
          </Text>
          <Flex gap={4} justify="center">
            <Button as={Link} href="/auth/signup" size="lg" >
              Start Free Trial
            </Button>
            <Button as={Link} href="/contact" variant="ghost" size="lg" >
              Schedule Consultation
            </Button>
          </Flex>
        </Flex>
      </Section>
      {/* Footer */}
      <footer >
        <Section >
          <Grid cols={4}>
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
              <Flex direction="col" gap={2}>
                <Link href="/features" >
                  Features
                </Link>
                <Link href="/pricing" >
                  Pricing
                </Link>
                <Link href="/integrations" >
                  Integrations
                </Link>
                <Link href="/roi-calculator" >
                  ROI Calculator
                </Link>
              </Flex>
            </div>
            <div>
              <h3 >Company</h3>
              <Flex direction="col" gap={2}>
                <Link href="/about" >
                  About Us
                </Link>
                <Link href="/team" >
                  Team
                </Link>
                <Link href="/careers" >
                  Careers
                </Link>
                <Link href="/contact" >
                  Contact
                </Link>
              </Flex>
            </div>
            <div>
              <h3 >Support</h3>
              <Flex direction="col" gap={2}>
                <Link href="/help" >
                  Help Center
                </Link>
                <Link href="/faq" >
                  FAQ
                </Link>
                <Link href="/privacy" >
                  Privacy Policy
                </Link>
                <Link href="/terms" >
                  Terms of Service
                </Link>
              </Flex>
            </div>
          </Grid>
        </Section>
        <div >
          <p>&copy; 2024 Enclosed.AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}