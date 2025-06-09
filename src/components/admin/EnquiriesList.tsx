
import React, { useState } from 'react';
import { useEnquiries } from '@/hooks/useEnquiries';
import { useMarkEnquiryAsRead } from '@/hooks/useEnquiryMutations';
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
import { Mail, Phone, MessageSquare, MailOpen } from 'lucide-react';
import { EnquiryReplyDialog } from './EnquiryReplyDialog';

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

  const [replyEnquiry, setReplyEnquiry] = useState<any>(null);
  const [replyType, setReplyType] = useState<'project' | 'contact'>('project');
  const markAsRead = useMarkEnquiryAsRead();

  const isLoading = loadingProject || loadingContact;
  const error = errorProject || errorContact;

  const handleCall = (phoneNumber: string) => {
    if (phoneNumber) {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  const handleReply = (enquiry: any, type: 'project' | 'contact') => {
    setReplyEnquiry(enquiry);
    setReplyType(type);
    
    // Mark as read when opening reply dialog
    if (!enquiry.is_read) {
      markAsRead.mutate({ enquiryId: enquiry.id, type });
    }
  };

  const handleMarkAsRead = (enquiryId: string, type: 'project' | 'contact') => {
    markAsRead.mutate({ enquiryId, type });
  };

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

  const unreadProjectCount = projectEnquiries?.filter(e => !e.is_read).length || 0;
  const unreadContactCount = contactEnquiries?.filter(e => !e.is_read).length || 0;

  return (
    <>
      <div className="p-6">
        <Tabs defaultValue="project" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="project" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Project Enquiries ({projectEnquiries?.length || 0})
              {unreadProjectCount > 0 && (
                <Badge variant="destructive" className="ml-1 text-xs">
                  {unreadProjectCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact Enquiries ({contactEnquiries?.length || 0})
              {unreadContactCount > 0 && (
                <Badge variant="destructive" className="ml-1 text-xs">
                  {unreadContactCount}
                </Badge>
              )}
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
                    <TableRow 
                      key={enquiry.id} 
                      className={!enquiry.is_read ? 'bg-blue-50' : ''}
                    >
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          {enquiry.name}
                          {!enquiry.is_read && (
                            <Badge variant="destructive" className="text-xs">
                              New
                            </Badge>
                          )}
                        </div>
                      </TableCell>
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
                        <div className="flex justify-end gap-2">
                          {!enquiry.is_read && (
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleMarkAsRead(enquiry.id, 'project')}
                              title="Mark as read"
                            >
                              <MailOpen className="w-4 h-4" />
                            </Button>
                          )}
                          {enquiry.phone && (
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleCall(enquiry.phone!)}
                              title={`Call ${enquiry.phone}`}
                            >
                              <Phone className="w-4 h-4" />
                            </Button>
                          )}
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleReply(enquiry, 'project')}
                          >
                            <Mail className="w-4 h-4 mr-1" />
                            Reply
                          </Button>
                        </div>
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
                    <TableRow 
                      key={enquiry.id} 
                      className={!enquiry.is_read ? 'bg-blue-50' : ''}
                    >
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          {enquiry.name}
                          {!enquiry.is_read && (
                            <Badge variant="destructive" className="text-xs">
                              New
                            </Badge>
                          )}
                        </div>
                      </TableCell>
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
                        <div className="flex justify-end gap-2">
                          {!enquiry.is_read && (
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleMarkAsRead(enquiry.id, 'contact')}
                              title="Mark as read"
                            >
                              <MailOpen className="w-4 h-4" />
                            </Button>
                          )}
                          {enquiry.phone && (
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleCall(enquiry.phone!)}
                              title={`Call ${enquiry.phone}`}
                            >
                              <Phone className="w-4 h-4" />
                            </Button>
                          )}
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleReply(enquiry, 'contact')}
                          >
                            <Mail className="w-4 h-4 mr-1" />
                            Reply
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </TabsContent>
        </Tabs>
      </div>

      <EnquiryReplyDialog
        enquiry={replyEnquiry}
        isOpen={!!replyEnquiry}
        onClose={() => setReplyEnquiry(null)}
      />
    </>
  );
};
