'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { CalendarIcon, MessageCircleIcon, FileTextIcon, ActivityIcon, BellIcon, MenuIcon, ShieldIcon, CoinsIcon, LockIcon } from 'lucide-react'

export function EnhancedPatientDashboardComponent() {
  const [dataRequests, setDataRequests] = React.useState([
    { id: 1, provider: "Dr. Smith", status: "pending", dataType: "Medical History" },
    { id: 2, provider: "City Hospital", status: "approved", dataType: "Lab Results" },
    { id: 3, provider: "Health Research Institute", status: "denied", dataType: "Genetic Data" },
  ])

  const handleDataRequestChange = (id: number, newStatus: string) => {
    setDataRequests(dataRequests.map(request => 
      request.id === id ? { ...request, status: newStatus } : request
    ))
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="#">
              <ActivityIcon className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">HealthConnect</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground" href="#">Dashboard</a>
              <a className="transition-colors hover:text-foreground/80 text-muted-foreground" href="#">Appointments</a>
              <a className="transition-colors hover:text-foreground/80 text-muted-foreground" href="#">Messages</a>
              <a className="transition-colors hover:text-foreground/80 text-muted-foreground" href="#">Profile</a>
            </nav>
          </div>
          <Button variant="outline" size="icon" className="mr-2 md:hidden">
            <MenuIcon className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Button variant="outline" size="icon">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start py-8">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Personal Health Record</CardTitle>
              <CardDescription>Your health information at a glance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Blood Pressure</CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">120/80</div>
                      <p className="text-xs text-muted-foreground">mmHg</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">72</div>
                      <p className="text-xs text-muted-foreground">bpm</p>
                    </CardContent>
                  </Card>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Medications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4">
                      <li>Lisinopril 10mg - 1 tablet daily</li>
                      <li>Metformin 500mg - 2 tablets twice daily</li>
                      <li>Atorvastatin 20mg - 1 tablet at bedtime</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 rounded-md border p-4">
                  <CalendarIcon />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Dr. Smith - Cardiology</p>
                    <p className="text-sm text-muted-foreground">June 15, 2023 at 10:00 AM</p>
                  </div>
                  <Button variant="outline">Reschedule</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 rounded-md border p-4">
                  <MessageCircleIcon />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Dr. Johnson</p>
                    <p className="text-sm text-muted-foreground">Re: Test Results</p>
                  </div>
                  <Badge>New</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Health Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FileTextIcon className="h-5 w-5 text-muted-foreground" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Complete health assessment</p>
                    <p className="text-sm text-muted-foreground">Update your health profile</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <ActivityIcon className="h-5 w-5 text-muted-foreground" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Increase daily steps</p>
                    <p className="text-sm text-muted-foreground">Aim for 10,000 steps per day</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Health Metrics</CardTitle>
              <CardDescription>Data from your connected devices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Daily Steps</p>
                    <p className="text-sm text-muted-foreground">7,543 / 10,000</p>
                  </div>
                  <Progress value={75} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Sleep</p>
                    <p className="text-sm text-muted-foreground">6h 30m / 8h</p>
                  </div>
                  <Progress value={81} />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Data Access Requests</CardTitle>
              <CardDescription>Manage provider access to your health data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dataRequests.map((request) => (
                  <div key={request.id} className="flex items-center justify-between space-x-4">
                    <div>
                      <p className="text-sm font-medium">{request.provider}</p>
                      <p className="text-xs text-muted-foreground">{request.dataType}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={request.status === 'approved' ? 'default' : 'secondary'}>
                        {request.status}
                      </Badge>
                      <Switch
                        checked={request.status === 'approved'}
                        onCheckedChange={(checked) => handleDataRequestChange(request.id, checked ? 'approved' : 'denied')}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CoinsIcon className="h-5 w-5" />
                <span>Health Rewards</span>
              </CardTitle>
              <CardDescription>Track your healthy behavior rewards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">1,250</span>
                  <span className="text-sm text-muted-foreground">Total Tokens</span>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Recent Rewards:</p>
                  <ul className="text-sm space-y-1">
                    <li>+50 tokens - 10,000 steps goal reached</li>
                    <li>+100 tokens - Workout completed</li>
                    <li>+200 tokens - Clinical trial participation</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Redeem Tokens:</p>
                  <Button variant="outline" size="sm" className="mr-2">Health Store Discount</Button>
                  <Button variant="outline" size="sm">Gym Membership</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <LockIcon className="h-5 w-5" />
                <span>Data Sharing Settings</span>
              </CardTitle>
              <CardDescription>Manage your data sharing preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Share Medical History</p>
                    <p className="text-xs text-muted-foreground">With approved healthcare providers</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Share Fitness Data</p>
                    <p className="text-xs text-muted-foreground">With health apps and research studies</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Anonymous Data for Research</p>
                    <p className="text-xs text-muted-foreground">Contribute to medical research</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}