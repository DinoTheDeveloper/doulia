import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bell } from "lucide-react";

const ComponentsShowcase: React.FC = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-8">Doulia Components Showcase</h1>
      
      {/* Basic Elements */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Elements</CardTitle>
          <CardDescription>Core components for the application</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-x-4">
            <Button variant="default">Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="ghost">Cancel</Button>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      {/* Profile Elements */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Elements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-sm text-gray-500">Software Engineer</p>
            </div>
            <Badge>Available</Badge>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">View Full Profile</Button>
        </CardFooter>
      </Card>

      {/* Notifications */}
      <Alert>
        <Bell className="h-4 w-4" />
        <AlertTitle>New Job Posted</AlertTitle>
        <AlertDescription>
          A new job matching your profile has been posted.
        </AlertDescription>
      </Alert>

      {/* Tabs Example */}
      <Card>
        <CardHeader>
          <CardTitle>Job Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="full-time">
            <TabsList>
              <TabsTrigger value="full-time">Full Time</TabsTrigger>
              <TabsTrigger value="part-time">Part Time</TabsTrigger>
              <TabsTrigger value="contract">Contract</TabsTrigger>
            </TabsList>
            <TabsContent value="full-time">
              Full time positions available
            </TabsContent>
            <TabsContent value="part-time">
              Part time positions available
            </TabsContent>
            <TabsContent value="contract">
              Contract positions available
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="text-sm text-gray-500">
          Last updated: 2 hours ago
        </CardFooter>
      </Card>
    </div>
  );
};

export default ComponentsShowcase;