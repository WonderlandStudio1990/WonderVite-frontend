'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ApplicationsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Applications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>No applications found.</p>
        </div>
      </CardContent>
    </Card>
  );
}