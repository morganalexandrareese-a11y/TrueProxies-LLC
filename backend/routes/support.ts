import express, { Request, Response } from 'express';

const router = express.Router();

const conversationHistory: Map<string, any[]> = new Map();

const supportContext = `You are TrueProxies AI Support. Help with proxy setup, troubleshooting, billing, accounts. Respond helpfully and professionally.`;

router.post('/chat', async (req: Request, res: Response) => {
  try {
    const { message, userId } = req.body;
    const userIdStr = userId || 'anonymous';

    if (!message || message.trim().length === 0) {
      return res.status(400).json({ message: 'Message cannot be empty' });
    }

    let history = conversationHistory.get(userIdStr) || [];
    history.push({ role: 'user', content: message });

    const assistantMessage = `Thank you for your question about: "${message}"\n\nOur support team will address your concern. For immediate assistance, contact us on Telegram: @giantDigitalcenter`;

    history.push({ role: 'assistant', content: assistantMessage });
    conversationHistory.set(userIdStr, history.slice(-10));

    res.json({
      id: `msg_${Date.now()}`,
      userId: userIdStr,
      content: assistantMessage,
      role: 'assistant',
      timestamp: new Date(),
    });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ message: 'Failed to process message' });
  }
});

router.get('/chat/history', async (req: Request, res: Response) => {
  try {
    const { userId } = req.query;
    const userIdStr = (userId as string) || 'anonymous';
    const history = conversationHistory.get(userIdStr) || [];
    res.json(history.filter(msg => msg.role !== 'system'));
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch history' });
  }
});

router.post('/chat/:messageId/rate', async (req: Request, res: Response) => {
  try {
    const { messageId } = req.params;
    const { helpful } = req.body;
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: 'Failed to rate message' });
  }
});

router.get('/faq', async (req: Request, res: Response) => {
  try {
    const faqs = [
      {
        id: 'faq_1',
        question: 'How do I set up a proxy on my application?',
        answer: 'To set up a proxy:\n1. Get your proxy credentials from the dashboard\n2. Use format: ip:port\n3. Enter username and password if required\n4. Test connection',
        category: 'setup',
        helpful: 45,
        unhelpful: 2,
      },
      {
        id: 'faq_2',
        question: 'Why is my proxy connection slow?',
        answer: 'If your proxy is slow:\n1. Check your internet speed\n2. Try a different proxy from another region\n3. Verify no other programs are using bandwidth',
        category: 'troubleshooting',
        helpful: 38,
        unhelpful: 5,
      },
    ];

    const { category } = req.query;
    let filtered = faqs;
    if (category && category !== 'all') {
      filtered = faqs.filter(f => f.category === category);
    }

    res.json(filtered);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch FAQ' });
  }
});

router.post('/tickets', async (req: Request, res: Response) => {
  try {
    const { userId, subject, description, category } = req.body;

    const ticket = {
      id: `ticket_${Date.now()}`,
      userId,
      subject,
      description,
      category,
      status: 'open',
      priority: 'medium',
      messages: [],
      createdAt: new Date(),
    };

    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create ticket' });
  }
});

router.get('/tickets', async (req: Request, res: Response) => {
  try {
    res.json([]);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch tickets' });
  }
});

router.get('/tickets/:id', async (req: Request, res: Response) => {
  try {
    res.json({});
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch ticket' });
  }
});

router.post('/tickets/:id/close', async (req: Request, res: Response) => {
  try {
    res.json({ status: 'closed' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to close ticket' });
  }
});

export default router;
