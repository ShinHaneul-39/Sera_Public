# Sera Discord AI Chatbot

A sophisticated Discord AI chatbot powered by **OpenRouter**, featuring advanced memory management, personality adaptation, and intelligent conversation capabilities.

## Features

- 🤖 **AI-Powered Conversations**: Advanced natural language processing using OpenRouter (access to Gemini, Claude, GPT-4, etc.)
- 🧠 **Memory System**: Contextual memory management for personalized interactions
- 👥 **Personality Adaptation**: Dynamic personality adjustment based on user relationships
- 🔒 **Security**: Rate limiting, content filtering, and user protection
- 📊 **Monitoring**: Comprehensive logging and performance monitoring
- 🗄️ **Database**: Persistent storage with Supabase integration
- 🎯 **Smart Context**: Intelligent conversation context management

## Quick Start

### Prerequisites

- Node.js 18+ 
- Discord Bot Token
- OpenRouter API Key
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Sera
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Run database migrations:
```bash
npm run migrate
```

5. Start the bot:
```bash
npm start
```

## Development

### Available Scripts

- `npm start` - Start the bot in production mode
- `npm run dev` - Start the bot in development mode with hot reload
- `npm run build` - Build the TypeScript code
- `npm run test` - Run test suite
- `npm run lint` - Run ESLint
- `npm run migrate` - Run database migrations
- `npm run migrate:create` - Create a new migration

### Project Structure

```
Sera/
├── src/
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions and helpers
│   ├── services/       # Core business logic services
│   ├── events/         # Discord event handlers
│   ├── commands/       # Discord slash commands
│   └── index.ts        # Application entry point
├── tests/              # Test files
├── supabase/           # Database migrations
├── .env.example        # Environment variables template
├── package.json        # Project dependencies and scripts
└── tsconfig.json      # TypeScript configuration
```

### Core Services

- **SeraBot**: Main bot class orchestrating all services
- **DatabaseService**: Supabase database operations
- **AIService**: OpenRouter API integration
- **MemoryService**: User memory management
- **PersonalityEngine**: Dynamic personality adaptation
- **SecurityManager**: Rate limiting and content filtering
- **MonitoringService**: Performance monitoring and health checks

## Configuration

### Environment Variables

Key environment variables (see `.env.example` for full list):

- `DISCORD_TOKEN` - Discord bot token
- `DISCORD_CLIENT_ID` - Discord application client ID
- `OPENROUTER_API_KEY` - OpenRouter API key (Required)
- `OPENROUTER_ENDPOINT` - OpenRouter API endpoint (Default: https://openrouter.ai/api/v1)
- `SUPABASE_URL` - Supabase project URL
- `SUPABASE_SERVICE_KEY` - Supabase service role key

### Bot Configuration

Configure bot behavior through environment variables:

- Response style and personality traits
- Memory retention policies
- Rate limiting thresholds
- Security settings
- Development options

## API Reference

### Discord Events

The bot handles various Discord events:

- **Message Create**: Processes user messages and generates AI responses
- **Guild Create/Delete**: Manages guild-specific settings
- **Member Add/Remove**: Updates user relationships
- **User Update**: Tracks user profile changes

### AI Integration

Features advanced AI capabilities via OpenRouter:

- Context-aware conversation handling
- Dynamic personality adaptation
- Memory-enhanced responses
- Sentiment analysis
- Keyword extraction

## Security

Security features include:

- Rate limiting per user and guild
- Content filtering for inappropriate content
- User blocking and protection
- Input validation and sanitization
- Encrypted sensitive data storage

## Monitoring

Comprehensive monitoring provides:

- Performance metrics collection
- Health checks for all services
- Error rate tracking
- Resource usage monitoring
- Alert system for issues

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the troubleshooting guide
