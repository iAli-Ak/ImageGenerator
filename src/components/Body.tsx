"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Loader2, Download, Upload } from "lucide-react"

export default function AIImageTool() {
  const [mode, setMode] = useState<'generate' | 'detect'>('generate')
  const [prompt, setPrompt] = useState('')
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [detectionResults, setDetectionResults] = useState<any[]>([])

  const handleGenerate = async () => {
    setIsLoading(true)
    setMessage('Generating image...')
    // Simulating image generation
    await new Promise(resolve => setTimeout(resolve, 3000))
    setGeneratedImage('/placeholder.svg?height=512&width=512')
    setMessage('Image generated successfully!')
    setIsLoading(false)
  }

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setUploadedImage(e.target?.result as string)
      reader.readAsDataURL(file)
    }
  }

  const handleDetect = async () => {
    setIsLoading(true)
    setMessage('Detecting objects...')
    // Simulating object detection
    await new Promise(resolve => setTimeout(resolve, 3000))
    setDetectionResults([
      { label: 'Person', confidence: 0.95, bbox: { x: 10, y: 10, width: 100, height: 200 } },
      { label: 'Car', confidence: 0.88, bbox: { x: 150, y: 50, width: 200, height: 150 } },
    ])
    setMessage('Detection completed!')
    setIsLoading(false)
  }

  const handleReset = () => {
    setUploadedImage(null)
    setDetectionResults([])
    setMessage('')
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-center space-x-2 mb-8">
        <div className="relative inline-flex items-center bg-gray-200 rounded-full p-1 cursor-pointer" onClick={() => setMode(mode === 'generate' ? 'detect' : 'generate')}>
          <div 
            className={`absolute w-1/2 h-full bg-blue-500 rounded-full transition-transform duration-300 ease-in-out ${
              mode === 'detect' ? 'translate-x-full' : ''
            }`} 
          />
          <div className={`relative px-3 py-1 rounded-full transition-colors duration-300 ease-in-out ${mode === 'generate' ? 'text-white' : 'text-gray-700'}`}>
            Generate
          </div>
          <div className={`relative px-3 py-1 rounded-full transition-colors duration-300 ease-in-out ${mode === 'detect' ? 'text-white' : 'text-gray-700'}`}>
            Detect
          </div>
        </div>
      </div>

      {mode === 'generate' ? (
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter your image prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button onClick={handleGenerate} disabled={isLoading || !prompt}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Generate'}
          </Button>
          {isLoading && <Progress value={33} className="w-full" />}
          {message && <p className="text-sm text-gray-600">{message}</p>}
          {generatedImage && (
            <div className="relative aspect-square">
              <img
                src={generatedImage}
                alt="Generated image"
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
            </div>
          )}
          {generatedImage && (
            <Button onClick={() => window.open(generatedImage, '_blank')}>
              <Download className="mr-2 h-4 w-4" /> Download Image
            </Button>
          )}
        </div>
      ) : (
        <div className="space-y-2">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
            <Input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="hidden"
              id="image-upload"
            />
            <Label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center">
              <Upload className="h-8 w-8 text-gray-400" />
              <span className="mt-2 text-sm text-gray-500">Upload an image or drag and drop</span>
            </Label>
          </div>
          {uploadedImage && (
            <div className="relative aspect-square">
              <img
                src={uploadedImage}
                alt="Uploaded image"
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
              {detectionResults.map((result, index) => (
                <div
                  key={index}
                  className="absolute border-2 border-red-500"
                  style={{
                    left: `${result.bbox.x}px`,
                    top: `${result.bbox.y}px`,
                    width: `${result.bbox.width}px`,
                    height: `${result.bbox.height}px`,
                  }}
                >
                  <span className="absolute top-0 left-0 bg-red-500 text-white text-xs px-1">
                    {result.label} ({(result.confidence * 100).toFixed(0)}%)
                  </span>
                </div>
              ))}
            </div>
          )}
          <Button onClick={handleDetect} disabled={isLoading || !uploadedImage}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Detect Objects'}
          </Button>
          {isLoading && <Progress value={33} className="w-full" />}
          {message && <p className="text-sm text-gray-600">{message}</p>}
          {uploadedImage && (
            <Button onClick={handleReset} variant="outline" className="mt-4">
              Reset / Upload New Image
            </Button>
          )}
        </div>
      )}
    </div>
  )
}