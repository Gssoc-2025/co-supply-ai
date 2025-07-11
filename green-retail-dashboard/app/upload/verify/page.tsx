"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Check, ChevronLeft, FileText, Leaf, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import DashboardLayout from "@/components/dashboard-layout"

export default function VerifyPage() {
  const router = useRouter()
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [score, setScore] = useState(0)

  const handleVerify = () => {
    setIsVerifying(true)

    // Simulate verification process
    setTimeout(() => {
      setScore(85)
      setIsVerifying(false)
      setIsVerified(true)
    }, 2000)
  }

  const handlePublish = () => {
    // Simulate publishing
    setTimeout(() => {
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Upload Product Data</h1>
          <p className="text-gray-500">Add a new product to calculate its sustainability score</p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Check className="h-5 w-5" />
            </div>
            <div className="h-1 flex-1 bg-green-400"></div>
          </div>
          <div className="flex flex-1 items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Check className="h-5 w-5" />
            </div>
            <div className="h-1 flex-1 bg-green-400"></div>
          </div>
          <div className="flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">3</div>
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <div className="w-24 text-center text-green-600">Product Details</div>
          <div className="w-32 text-center text-green-600">ESG Details</div>
          <div className="w-32 text-center text-green-600">Verify & Publish</div>
        </div>

        {/* Summary Card */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">Product Summary</CardTitle>
              <CardDescription>Review your product information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-lg bg-gray-100"></div>
                <div>
                  <h3 className="font-semibold">Organic Cotton T-shirt</h3>
                  <p className="text-sm text-gray-500">Apparel</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Website:</span>
                  <span className="text-sm">eco-threads.com/product</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Materials:</span>
                  <span className="text-sm">100% Organic Cotton</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Certifications:</span>
                  <span className="text-sm">GOTS, Fair Trade Certified</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Transport Distance:</span>
                  <span className="text-sm">1250 km</span>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="mb-1 text-sm font-medium">Additional Notes</h4>
                <p className="text-xs text-gray-500">
                  This product is made in a solar-powered facility with zero waste practices. Workers are paid living
                  wages and provided healthcare benefits.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">Verification</CardTitle>
              <CardDescription>Verify your product's sustainability claims</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {!isVerified ? (
                <>
                  <div className="rounded-lg bg-amber-50 p-4 text-amber-800">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5" />
                      <h3 className="font-medium">Verification Required</h3>
                    </div>
                    <p className="mt-1 text-sm">
                      Click the button below to verify your product's sustainability claims and calculate its Green
                      Score.
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <FileText className="h-16 w-16 text-gray-300" />
                    <p className="text-center text-sm text-gray-500">
                      Our AI will analyze your product data and calculate a sustainability score based on materials,
                      certifications, and supply chain information.
                    </p>
                    <Button
                      onClick={handleVerify}
                      className="w-full bg-green-600 hover:bg-green-700"
                      disabled={isVerifying}
                    >
                      {isVerifying ? "Verifying..." : "Verify Claims"}
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-lg bg-green-50 p-4 text-green-800">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5" />
                      <h3 className="font-medium">Verification Complete</h3>
                    </div>
                    <p className="mt-1 text-sm">
                      Your product's sustainability claims have been verified and a Green Score has been calculated.
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-green-50">
                      <Leaf className="h-12 w-12 text-green-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="h-32 w-32 -rotate-90 transform">
                          <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="transparent"
                            className="text-green-100"
                          />
                          <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="transparent"
                            strokeDasharray="352"
                            strokeDashoffset={352 - (352 * score) / 100}
                            className="text-green-500"
                          />
                        </svg>
                      </div>
                      <span className="absolute text-2xl font-bold">{score}</span>
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold">Green Score</h3>
                      <p className="text-sm text-gray-500">Your product is highly sustainable</p>
                    </div>
                    <Button onClick={handlePublish} className="w-full bg-green-600 hover:bg-green-700">
                      Publish Product
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center justify-between">
          <Button variant="outline" onClick={() => router.push("/upload/esg")}>
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to ESG Details
          </Button>
          <Button variant="outline">Save as Draft</Button>
        </div>
      </div>
    </DashboardLayout>
  )
}
