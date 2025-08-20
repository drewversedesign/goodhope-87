import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Smartphone, CheckCircle, MessageCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount?: string;
}

const DonationModal = ({ isOpen, onClose, amount }: DonationModalProps) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();

  const mobileMoneyDetails = {
    mtn: "0790281993",
    airtel: "0746472388"
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast({
        title: "Copied!",
        description: `${field} copied to clipboard`,
        variant: "default"
      });
      
      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopiedField(null);
      }, 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive"
      });
    }
  };

  const handleWhatsAppConfirm = () => {
    const confirmMessage = `Hello! I've just sent a Mobile Money donation${amount ? ` of ${amount}` : ''} to Good Hope Ministries. Could you please confirm receipt? Thank you for the amazing work you do! 🙏`;
    const whatsappUrl = `https://wa.me/256790281993?text=${encodeURIComponent(confirmMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">
            Mobile Money Donation
          </DialogTitle>
          <p className="text-gray-600 text-center">
            {amount ? `Donate ${amount}` : 'Make a donation'} to support vulnerable children in Uganda
          </p>
        </DialogHeader>

        <div className="mt-6">
          <div className="border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-orange-50/30">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <Smartphone className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Mobile Money</h3>
                <p className="text-sm text-gray-600">MTN & Airtel Uganda</p>
              </div>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">MTN Uganda</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-sm bg-white px-2 py-1 rounded border">{mobileMoneyDetails.mtn}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(mobileMoneyDetails.mtn, 'MTN number')}
                      className="h-8 w-8 p-0"
                    >
                      {copiedField === 'MTN number' ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">Airtel Uganda</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-sm bg-white px-2 py-1 rounded border">{mobileMoneyDetails.airtel}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(mobileMoneyDetails.airtel, 'Airtel number')}
                      className="h-8 w-8 p-0"
                    >
                      {copiedField === 'Airtel number' ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={handleWhatsAppConfirm}
              variant="outline"
              className="w-full border-green-300 text-green-700 hover:bg-green-50"
            >
              Confirm via WhatsApp
              <MessageCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Money Guide */}
        <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 mb-2">Mobile Money Guide</h4>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• Send money to the numbers above using your preferred method</li>
            <li>• Use "Good Hope Ministries donation" as reference if prompted</li>
            <li>• Click "Confirm via WhatsApp" after sending to notify us</li>
            <li>• We'll send you a confirmation and thank you message</li>
          </ul>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Having trouble? <a href="/contact" className="text-orange-600 hover:underline">Contact us</a> for assistance.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;