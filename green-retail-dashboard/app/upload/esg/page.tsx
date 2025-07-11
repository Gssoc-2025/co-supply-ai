"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Check, ChevronLeft, ChevronRight, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import DashboardLayout from "@/components/dashboard-layout"

export default function ESGDetailsPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    materials: "",
    factoryAudit: null,
    transportDistance: "",
    certifications: "",
    notes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }))
    }
  }

  const handleNext = () => {
    // Validate form data
    if (!formData.materials || !formData.transportDistance) {
      alert("Please fill in all required fields")
      return
    }

    // Move to verify page
    router.push("/upload/verify")
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
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">2</div>
            <div className="h-1 flex-1 bg-gray-200"></div>
          </div>
          <div className="flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600">3</div>
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <div className="w-24 text-center text-green-600">Product Details</div>
          <div className="w-32 text-center text-green-600">ESG Details</div>
          <div className="w-32 text-center text-gray-500">Verify & Publish</div>
        </div>

        {/* Form */}
        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Enter ESG Details</CardTitle>
            <CardDescription>Provide sustainability information for your product</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="materials">
                    Materials <span className="text-red-500">*</span>
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>List all materials used in your product</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="materials"
                  name="materials"
                  placeholder="e.g. 100% Organic Cotton"
                  value={formData.materials}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="certifications">Certifications</Label>
                <Input
                  id="certifications"
                  name="certifications"
                  placeholder="e.g. fair-trade, organic"
                  value={formData.certifications}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="factoryAudit">Factory Audit Report (PDF)</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="factoryAudit"
                  name="factoryAudit"
                  type="file"
                  accept=".pdf"
                  className="h-10"
                  onChange={handleFileChange}
                />
                <Button variant="outline" size="sm">
                  Browse
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="transportDistance">
                  Transport Distance (km) <span className="text-red-500">*</span>
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Total distance from production to distribution center</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input
                id="transportDistance"
                name="transportDistance"
                type="number"
                placeholder="Enter distance in km"
                value={formData.transportDistance}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Enter any additional sustainability information"
                className="min-h-[100px]"
                value={formData.notes}
                onChange={handleChange}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between gap-4">
              <Button variant="outline" onClick={() => router.push("/upload")}>
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back
              </Button>
              <div className="flex gap-2">
                <Button variant="outline">Save as Draft</Button>
                <Button onClick={handleNext} className="bg-green-600 hover:bg-green-700">
                  Continue to Verify
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
