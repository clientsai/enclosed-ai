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
    <div className="min-h-screen bg-black">
      {/* Header */}
      {/* Hero Section */}
      <Section className="text-center">
        <Flex direction="col" gap={6}>
          <Badge>Free Calculator</Badge>
          <H1>
            Calculate Your Direct Mail ROI
          </H1>
          <Text size="lg" className="max-w-3xl mx-auto">
            Make data-driven decisions about your direct mail campaigns. Our comprehensive ROI calculator helps you estimate costs, responses, and returns before you invest. Input your campaign parameters below and see projected results instantly.
          </Text>
        </Flex>
      </Section>
      {/* Calculator Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <Grid cols={2} className="gap-8">
            {/* Input Panel */}
            <Card className="p-8">
              <Flex direction="col" gap={6}>
                <H3>Campaign Parameters</H3>
                <div className="space-y-6">
                  {/* Campaign Details */}
                  <div>
                    <h4 className="font-semibold text-white mb-4">Campaign Details</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Number of Mail Pieces
                        </label>
                        <input
                          type="number"
                          value={inputs.mailPieces}
                          onChange={(e) => handleInputChange('mailPieces', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          min="1"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Cost per Mail Piece ($)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={inputs.costPerPiece}
                          onChange={(e) => handleInputChange('costPerPiece', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          min="0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Expected Response Rate (%)
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          value={inputs.responseRate}
                          onChange={(e) => handleInputChange('responseRate', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          min="0"
                          max="100"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Revenue Details */}
                  <div>
                    <h4 className="font-semibold text-white mb-4">Revenue Details</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Average Order Value ($)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={inputs.averageOrderValue}
                          onChange={(e) => handleInputChange('averageOrderValue', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          min="0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Conversion Rate (% of responses that buy)
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          value={inputs.conversionRate}
                          onChange={(e) => handleInputChange('conversionRate', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          min="0"
                          max="100"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Additional Costs */}
                  <div>
                    <h4 className="font-semibold text-white mb-4">Additional Costs</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Design & Creative Costs ($)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={inputs.designCosts}
                          onChange={(e) => handleInputChange('designCosts', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          min="0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          List Acquisition Costs ($)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={inputs.listCosts}
                          onChange={(e) => handleInputChange('listCosts', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          min="0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Other Costs ($)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={inputs.otherCosts}
                          onChange={(e) => handleInputChange('otherCosts', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Flex>
            </Card>
            {/* Results Panel */}
            <Card className="p-8">
              <Flex direction="col" gap={6}>
                <H3>Projected Results</H3>
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-black rounded-lg">
                    <div className="text-xl md:text-2xl font-bold text-white">
                      {formatCurrency(results.totalRevenue)}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">Total Revenue</div>
                  </div>
                  <div className="text-center p-4 bg-black rounded-lg">
                    <div className="text-xl md:text-2xl font-bold text-white">
                      {formatCurrency(results.totalCost)}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">Total Cost</div>
                  </div>
                  <div className="text-center p-4 bg-black rounded-lg">
                    <div className={`text-xl md:text-2xl font-bold ${results.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {results.roi >= 0 ? '+' : ''}{results.roi}%
                    </div>
                    <div className="text-sm text-gray-400 mt-1">ROI</div>
                  </div>
                  <div className="text-center p-4 bg-black rounded-lg">
                    <div className={`text-xl md:text-2xl font-bold ${results.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatCurrency(results.profit)}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">Profit/Loss</div>
                  </div>
                </div>
                {/* Detailed Metrics */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-300">Expected Responses</span>
                    <span className="font-semibold">{formatNumber(results.totalResponses)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-300">Expected Conversions</span>
                    <span className="font-semibold">{formatNumber(results.totalConversions)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-300">Cost per Response</span>
                    <span className="font-semibold">{formatCurrency(results.costPerResponse)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-300">Cost per Conversion</span>
                    <span className="font-semibold">{formatCurrency(results.costPerConversion)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Break-even Response Rate</span>
                    <span className="font-semibold">{results.breakEvenResponseRate}%</span>
                  </div>
                </div>
                {/* ROI Interpretation */}
                <div className="mt-6">
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
      <Section className="bg-black">
        <Flex direction="col" gap={8}>
          <div className="text-center">
            <H2>Industry Benchmarks</H2>
            <Text size="lg" className="max-w-3xl mx-auto">
              Compare your projections with industry standards to set realistic expectations and identify opportunities for improvement.
            </Text>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-black rounded-lg shadow-sm">
              <thead className="bg-black">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Industry
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Response Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Avg Order Value
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {industryBenchmarks.map((benchmark, index) => (
                  <tr key={index} className="hover:bg-black">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-white">
                      {benchmark.industry}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                      {benchmark.responseRate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                      {benchmark.avgOrderValue}
                    </td>
                    <td className="px-6 py-4 text-gray-300">
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
          <div className="text-center">
            <H2>Optimization Tips</H2>
            <Text size="lg" className="max-w-3xl mx-auto">
              Maximize your direct mail ROI with these proven strategies
            </Text>
          </div>
          <Grid cols={3}>
            <Card className="p-6">
              <Flex direction="col" gap={4}>
                <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-white"
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
                <p className="text-gray-300 leading-relaxed">
                  Use personalization, compelling offers, clear calls-to-action, and professional design to increase response rates by 20-40%.
                </p>
              </Flex>
            </Card>
            <Card className="p-6">
              <Flex direction="col" gap={4}>
                <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-white"
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
                <p className="text-gray-300 leading-relaxed">
                  Optimize mail formats, negotiate volume discounts, and use efficient targeting to reduce cost per piece by 15-30%.
                </p>
              </Flex>
            </Card>
            <Card className="p-6">
              <Flex direction="col" gap={4}>
                <div className="h-12 w-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-white"
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
                <p className="text-gray-300 leading-relaxed">
                  Streamline your sales process, provide multiple response options, and follow up promptly to boost conversion rates.
                </p>
              </Flex>
            </Card>
          </Grid>
        </Flex>
      </Section>
      {/* CTA Section */}
      <Section className="bg-gray-900 text-white text-center">
        <Flex direction="col" gap={6}>
          <H2 className="text-white">
            Ready to Launch Your Campaign?
          </H2>
          <Text size="lg" className="text-gray-300 max-w-3xl mx-auto">
            Start your direct mail campaign with Enclosed.AI and achieve the ROI you've calculated. Our AI-powered platform helps you exceed industry benchmarks.
          </Text>
          <Flex gap={4} justify="center">
            <Button as={Link} href="/auth/signup" size="lg" className="bg-black text-white hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button as={Link} href="/contact" variant="ghost" size="lg" className="border-white text-white hover:bg-black hover:text-white">
              Schedule Consultation
            </Button>
          </Flex>
        </Flex>
      </Section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <Section className="border-b border-gray-800">
          <Grid cols={4}>
            <div>
              <Logo
                size="md"
                showText={true}
                linkToHome={false}
                className="text-white [&>div>span]:text-white mb-4"
              />
              <p className="text-gray-400 text-sm">
                Direct mail marketing powered by artificial intelligence
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <Flex direction="col" gap={2}>
                <Link href="/features" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Features
                </Link>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
                <Link href="/integrations" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Integrations
                </Link>
                <Link href="/roi-calculator" className="text-gray-400 hover:text-white transition-colors text-sm">
                  ROI Calculator
                </Link>
              </Flex>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <Flex direction="col" gap={2}>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
                <Link href="/team" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Team
                </Link>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </Flex>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <Flex direction="col" gap={2}>
                <Link href="/help" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Help Center
                </Link>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </Flex>
            </div>
          </Grid>
        </Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Enclosed.AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}