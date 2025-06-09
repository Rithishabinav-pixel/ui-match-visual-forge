
import React, { useState } from 'react';
import { useEnquiries } from '@/hooks/useEnquiries';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { format } from 'date-fns';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export const EnquiriesList = () => {
  const { 
    data: projectEnquiries, 
    isLoading: loadingProject, 
    error: errorProject 
  } = useEnquiries('project');
  
  const { 
    data: contactEnquiries, 
    isLoading: loadingContact, 
    error: errorContact 
  } = useEnquiries('contact');

  const isLoading = loadingProject || loadingContact;
  const error = errorProject || errorContact;

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex justify-center items-center py-8">
          <div className="text-gray-500">Loading enquiries...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="text-red-500 text-center py-8">
          Error loading enquiries: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Tabs defaultValue="project" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="project" className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Project Enquiries ({projectEnquiries?.length || 0})
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Contact Enquiries ({contactEnquiries?.length || 0})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="project" className="mt-6">
          {!projectEnquiries || projectEnquiries.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-500">No project enquiries found</div>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projectEnquiries.map((enquiry) => (
                  <TableRow key={enquiry.id}>
                    <TableCell className="font-medium">{enquiry.name}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="w-3 h-3" />
                          {enquiry.email}
                        </div>
                        {enquiry.phone && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone className="w-3 h-3" />
                            {enquiry.phone}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {enquiry.project_id && (
                        <Badge variant="outline">Project ID: {enquiry.project_id.slice(0, 8)}...</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="max-w-xs truncate" title={enquiry.message}>
                        {enquiry.message}
                      </div>
                    </TableCell>
                    <TableCell>
                      {format(new Date(enquiry.created_at), 'MMM dd, yyyy HH:mm')}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Reply
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TabsContent>
        
        <TabsContent value="contact" className="mt-6">
          {!contactEnquiries || contactEnquiries.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-500">No contact enquiries found</div>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contactEnquiries.map((enquiry) => (
                  <TableRow key={enquiry.id}>
                    <TableCell className="font-medium">{enquiry.name}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="w-3 h-3" />
                          {enquiry.email}
                        </div>
                        {enquiry.phone && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone className="w-3 h-3" />
                            {enquiry.phone}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {enquiry.subject ? (
                        <Badge variant="outline">{enquiry.subject}</Badge>
                      ) : (
                        <span className="text-gray-400">No subject</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="max-w-xs truncate" title={enquiry.message}>
                        {enquiry.message}
                      </div>
                    </TableCell>
                    <TableCell>
                      {format(new Date(enquiry.created_at), 'MMM dd, yyyy HH:mm')}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Reply
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};
