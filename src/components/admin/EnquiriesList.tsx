
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Mail, Phone } from 'lucide-react';
import { format } from 'date-fns';
import { useEnquiries } from '@/hooks/useEnquiries';
import { useMarkEnquiriesAsRead } from '@/hooks/useEnquiryMutations';

export const EnquiriesList = () => {
  const { data: projectEnquiries, isLoading: loadingProject } = useEnquiries('project');
  const { data: contactEnquiries, isLoading: loadingContact } = useEnquiries('contact');
  const { markProjectEnquiriesAsRead, markContactEnquiriesAsRead } = useMarkEnquiriesAsRead();
  const [activeTab, setActiveTab] = useState('project');

  useEffect(() => {
    // Mark enquiries as read when the component mounts or tab changes
    if (activeTab === 'project' && projectEnquiries && projectEnquiries.some(e => !e.is_read)) {
      markProjectEnquiriesAsRead.mutate();
    } else if (activeTab === 'contact' && contactEnquiries && contactEnquiries.some(e => !e.is_read)) {
      markContactEnquiriesAsRead.mutate();
    }
  }, [activeTab, projectEnquiries, contactEnquiries]);

  if (loadingProject || loadingContact) {
    return (
      <div className="p-6">
        <div className="flex justify-center items-center py-8">
          <div className="text-gray-500">Loading enquiries...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="project" className="flex items-center gap-2">
            Project Enquiries
            {projectEnquiries && (
              <Badge variant="secondary" className="ml-2">
                {projectEnquiries.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center gap-2">
            Contact Enquiries
            {contactEnquiries && (
              <Badge variant="secondary" className="ml-2">
                {contactEnquiries.length}
              </Badge>
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="project">
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projectEnquiries && projectEnquiries.length > 0 ? (
                  projectEnquiries.map((enquiry) => (
                    <TableRow key={enquiry.id}>
                      <TableCell className="font-medium">{enquiry.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-500" />
                          {enquiry.email}
                        </div>
                      </TableCell>
                      <TableCell>
                        {enquiry.phone ? (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-500" />
                            {enquiry.phone}
                          </div>
                        ) : (
                          'N/A'
                        )}
                      </TableCell>
                      <TableCell>
                        {enquiry.project_id ? `Project ${enquiry.project_id.slice(0, 8)}...` : 'General'}
                      </TableCell>
                      <TableCell className="max-w-xs truncate">
                        {enquiry.message}
                      </TableCell>
                      <TableCell>
                        {format(new Date(enquiry.created_at), 'MMM dd, yyyy')}
                      </TableCell>
                      <TableCell>
                        <Badge variant={enquiry.is_read ? "secondary" : "default"}>
                          {enquiry.is_read ? "Read" : "New"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                      No project enquiries found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="contact">
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contactEnquiries && contactEnquiries.length > 0 ? (
                  contactEnquiries.map((enquiry) => (
                    <TableRow key={enquiry.id}>
                      <TableCell className="font-medium">{enquiry.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-500" />
                          {enquiry.email}
                        </div>
                      </TableCell>
                      <TableCell>
                        {enquiry.phone ? (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-500" />
                            {enquiry.phone}
                          </div>
                        ) : (
                          'N/A'
                        )}
                      </TableCell>
                      <TableCell>{enquiry.subject || 'N/A'}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        {enquiry.message}
                      </TableCell>
                      <TableCell>
                        {format(new Date(enquiry.created_at), 'MMM dd, yyyy')}
                      </TableCell>
                      <TableCell>
                        <Badge variant={enquiry.is_read ? "secondary" : "default"}>
                          {enquiry.is_read ? "Read" : "New"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                      No contact enquiries found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
