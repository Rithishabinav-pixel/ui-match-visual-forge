
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Send } from 'lucide-react';

interface EnquiryReplyDialogProps {
  enquiry: {
    id: string;
    name: string;
    email: string;
    message: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryReplyDialog = ({ enquiry, isOpen, onClose }: EnquiryReplyDialogProps) => {
  const [replyData, setReplyData] = useState({
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const handleSendReply = async () => {
    if (!enquiry || !replyData.subject || !replyData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);
    
    try {
      // This would typically call a Supabase Edge Function for sending emails
      // For now, we'll simulate the email sending
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Reply Sent!",
        description: `Your reply has been sent to ${enquiry.email}`,
      });
      
      setReplyData({ subject: '', message: '' });
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send reply. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  React.useEffect(() => {
    if (enquiry && isOpen) {
      setReplyData({
        subject: `Re: Your enquiry`,
        message: `Dear ${enquiry.name},\n\nThank you for your enquiry. \n\nBest regards,\nThe Team`
      });
    }
  }, [enquiry, isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Reply to {enquiry?.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-3 rounded border">
            <p className="text-sm text-gray-600 mb-1">Original message:</p>
            <p className="text-sm">{enquiry?.message}</p>
          </div>
          
          <div>
            <Label htmlFor="reply-subject">Subject</Label>
            <Input
              id="reply-subject"
              value={replyData.subject}
              onChange={(e) => setReplyData(prev => ({ ...prev, subject: e.target.value }))}
              placeholder="Reply subject"
              disabled={isSending}
            />
          </div>
          
          <div>
            <Label htmlFor="reply-message">Your Reply</Label>
            <Textarea
              id="reply-message"
              value={replyData.message}
              onChange={(e) => setReplyData(prev => ({ ...prev, message: e.target.value }))}
              placeholder="Type your reply here..."
              rows={6}
              disabled={isSending}
            />
          </div>
          
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose} disabled={isSending}>
              Cancel
            </Button>
            <Button onClick={handleSendReply} disabled={isSending}>
              {isSending ? (
                'Sending...'
              ) : (
                <>
                  Send Reply
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
