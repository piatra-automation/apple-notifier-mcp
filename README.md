# Apple Notifier MCP Server (Enhanced DXT Edition)

[![smithery badge](https://smithery.ai/badge/apple-notifier-mcp)](https://smithery.ai/server/apple-notifier-mcp)

Enhanced MCP server for sending native macOS notifications with **terminal-notifier** support, interactive dialogs, text-to-speech, screenshots, and file selection. Now available as a **Desktop Extension (DXT)** for one-click installation in Claude Desktop.

<a href="https://glama.ai/mcp/servers/t1w1dq4wy4"><img width="380" height="200" src="https://glama.ai/mcp/servers/t1w1dq4wy4/badge" alt="apple-notifier-mcp MCP server" /></a>

## 🔄 About This Repository

This repository is based on a fork of the [original apple-notifier-mcp](https://github.com/turlockmike/apple-notifier-mcp) by [Michael Darmousseh](https://github.com/turlockmike). We've enhanced the original implementation to improve functionality and user experience.

### 🎯 Why These Enhancements?

#### **Problem 1: Script Editor Icon Limitation**
The original implementation used `osascript` to send notifications, which resulted in all notifications showing the **Script Editor icon**. This is because Apple's notification system shows the icon of whatever app sends the notification, and since `osascript` belongs to Script Editor, that's what appears.

**Our Solution**: We've migrated to `terminal-notifier`, which provides:
- ✅ **Better icon control** - Terminal icon instead of Script Editor
- ✅ **More reliable delivery** - Dedicated notification tool
- ✅ **Enhanced customization** - Future support for custom app icons
- ✅ **Professional appearance** - Better visual integration

#### **Problem 2: Complex Installation Process**
The original required multiple manual steps:
1. Install Node.js
2. Install the package globally
3. Manually edit JSON configuration files
4. Restart Claude Desktop
5. Hope it works

**Our Solution**: **Desktop Extensions (DXT)** provide:
- ✅ **One-click installation** - Just double-click the .dxt file
- ✅ **Automatic updates** - Extensions update themselves
- ✅ **Zero configuration** - No JSON file editing required
- ✅ **Built-in Node.js** - Claude Desktop includes the runtime
- ✅ **Easy removal** - Uninstall through Claude Desktop UI

> **Important**: DXT handles **MCP server dependencies** automatically, but **system-level tools** like `terminal-notifier` must still be installed manually. This is by design for security and system integrity.

### 🏗️ Technical Improvements

- **Modern Architecture**: Follows Anthropic's latest DXT specification v0.1
- **Better Error Handling**: More informative error messages and dependency checking
- **Professional Packaging**: Industry-standard extension distribution
- **Enhanced Documentation**: Comprehensive guides for users and developers
- **Backward Compatibility**: Still works with manual installation methods

## ✨ What's New

- **🎯 Better Notification Icons**: Uses `terminal-notifier` instead of `osascript` for custom app icons and improved notification control
- **📦 Desktop Extension (DXT)**: One-click installation in Claude Desktop - no more manual configuration!
- **🔧 Enhanced Error Handling**: Better dependency checking and user-friendly error messages
- **🏗️ Modern Architecture**: Updated to follow Anthropic's DXT specification
- **📚 Comprehensive Documentation**: Clear installation guides and technical details
- **⚡ Professional Packaging**: Production-ready distribution and build system

## Prerequisites

- **macOS** (required)
- **terminal-notifier** (for enhanced notifications - **required even for DXT installation**)
- An MCP-compatible client (Claude Desktop, Cline)

> **Note for DXT Users**: While Claude Desktop handles Node.js and MCP server dependencies automatically, `terminal-notifier` is a **system-level tool** that must be installed manually.

### Installing terminal-notifier

For the best notification experience with custom icons:

```bash
# Install using Homebrew (recommended)
brew install terminal-notifier

# Or install using npm
npm install -g terminal-notifier
```

> **Why terminal-notifier?** The extension will provide helpful error messages and installation guidance if terminal-notifier is missing, but installing it upfront ensures the best experience.

## Installation

### ⚠️ Prerequisites

1. **Install terminal-notifier** (required system dependency):
   ```bash
   brew install terminal-notifier
   ```

2. **Configure macOS Notifications**:
   - Open **System Settings > Notifications**
   - Find **terminal-notifier** in the list
   - Enable "Allow Notifications"
   - Configure alert style and other preferences as desired

> **Important**: Without these steps, notifications will not appear on your system.

### Option 1: Desktop Extension (DXT) - Recommended 🌟

The easiest way to install this extension is as a Desktop Extension (DXT) in Claude Desktop:

1. **Download** the latest `.dxt` file from our [releases page](https://gitlab.com/piatra-open-source-projects/apple-notifier-mcp/-/releases)

2. **Install** by double-clicking the `.dxt` file or dragging it to Claude Desktop

3. **Done!** The extension will be automatically configured and ready to use

> **Note**: DXT handles the MCP server installation but cannot install system-level dependencies like `terminal-notifier`. Make sure you've completed the prerequisites above.

> **Automatic Updates**: DXT extensions update automatically when new versions are available!

### Option 2: Installing via Smithery

To install Apple Notifier for Claude Desktop automatically via [Smithery](https://smithery.ai/server/apple-notifier-mcp):

```bash
npx -y @smithery/cli install apple-notifier-mcp --client claude
```

### Option 3: Manual Installation

1. Ensure terminal-notifier is installed (see Prerequisites above)

2. Install the package globally:
```bash
npm install -g apple-notifier-mcp
```

3. Add to your MCP configuration file:

For Cline (`cline_mcp_settings.json`):
```json
{
  "mcpServers": {
    "apple-notifier": {
      "command": "apple-notifier-mcp"
    }
  }
}
```

For Claude Desktop (`claude_desktop_config.json`):
```json
{
  "mcpServers": {
    "apple-notifier": {
      "command": "apple-notifier-mcp"
    }
  }
}
```

## Features

### Send Notifications

Display native macOS notifications with **terminal-notifier** for better icon control and enhanced appearance.

**Advantages over osascript:**
- ✅ Custom app icons instead of Script Editor icon
- ✅ Better notification reliability  
- ✅ More consistent appearance
- ✅ Enhanced notification controls

Parameters:
- `title` (required): string - The title of the notification
- `message` (required): string - The main message content
- `subtitle` (optional): string - A subtitle to display
- `sound` (optional): boolean - Whether to play the default notification sound (default: true)

### Display Prompts

Show interactive dialog prompts to get user input.

Parameters:
- `message` (required): string - Text to display in the prompt dialog
- `defaultAnswer` (optional): string - Default text to pre-fill
- `buttons` (optional): string[] - Custom button labels (max 3)
- `icon` (optional): 'note' | 'stop' | 'caution' - Icon to display

### Text-to-Speech

Use macOS text-to-speech capabilities.

Parameters:
- `text` (required): string - Text to speak
- `voice` (optional): string - Voice to use (defaults to system voice)
- `rate` (optional): number - Speech rate (-50 to 50, defaults to 0)

### Take Screenshots

Capture screenshots using macOS screencapture.

Parameters:
- `path` (required): string - Path where to save the screenshot
- `type` (required): 'fullscreen' | 'window' | 'selection' - Type of screenshot
- `format` (optional): 'png' | 'jpg' | 'pdf' | 'tiff' - Image format
- `hideCursor` (optional): boolean - Whether to hide the cursor
- `shadow` (optional): boolean - Whether to include window shadow (only for window type)
- `timestamp` (optional): boolean - Add timestamp to filename

### File Selection

Open native macOS file picker dialog.

Parameters:
- `prompt` (optional): string - Prompt message
- `defaultLocation` (optional): string - Default directory path
- `fileTypes` (optional): object - File type filter (e.g., {"public.image": ["png", "jpg"]})
- `multiple` (optional): boolean - Allow multiple file selection

## Example Usage

```typescript
// Send a notification
await client.use_mcp_tool("apple-notifier", "send_notification", {
  title: "Hello",
  message: "World",
  sound: true
});

// Show a prompt
const result = await client.use_mcp_tool("apple-notifier", "prompt_user", {
  message: "What's your name?",
  defaultAnswer: "John Doe",
  buttons: ["OK", "Cancel"]
});

// Speak text
await client.use_mcp_tool("apple-notifier", "speak", {
  text: "Hello, world!",
  voice: "Samantha",
  rate: -20
});

// Take a screenshot
await client.use_mcp_tool("apple-notifier", "take_screenshot", {
  path: "screenshot.png",
  type: "window",
  format: "png"
});

// Select files
const files = await client.use_mcp_tool("apple-notifier", "select_file", {
  prompt: "Select images",
  fileTypes: {
    "public.image": ["png", "jpg", "jpeg"]
  },
  multiple: true
});
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup and guidelines.

## Building as Desktop Extension (DXT)

This project is structured as a Desktop Extension following Anthropic's DXT specification:

### Development Commands

```bash
# Build the project
npm run build

# Create DXT package
npm run package:dxt

# Build and create DXT in one step
npm run install:dxt
```

### DXT Structure

```
apple-notifier-mcp.dxt (ZIP file)
├── manifest.json          # DXT manifest with capabilities and metadata
├── build/                 # Compiled TypeScript server
│   └── index.js          # Main MCP server entry point
├── package.json          # Node.js package definition
├── README.md             # Documentation
└── LICENSE              # MIT license
```

### Testing DXT Installation

1. Build the DXT: `pnpm package:dxt`
2. Install in Claude Desktop by double-clicking `apple-notifier-mcp.dxt`
3. Test the tools in Claude Desktop

For more information about Desktop Extensions, see the [Anthropic DXT documentation](https://github.com/anthropics/dxt).

## ❓ Frequently Asked Questions

### Does DXT handle all dependencies automatically?

**Partially.** DXT handles **MCP server dependencies** (like Node.js packages) automatically, but **system-level tools** must be installed manually:

- ✅ **Handled by DXT**: Node.js runtime, npm packages, MCP server code
- ❌ **Manual installation required**: `terminal-notifier`, Homebrew tools, system utilities

### Why do I still need to install terminal-notifier with DXT?

For security and system integrity, DXT extensions cannot install system-level tools. This is intentional - extensions shouldn't modify your system without explicit permission. Claude Desktop's built-in error handling will guide you through installing `terminal-notifier` if it's missing.

### What happens if I don't install terminal-notifier?

The extension will detect the missing dependency and provide clear installation instructions. The notification functionality won't work until `terminal-notifier` is installed, but other tools (speech, screenshots, file selection) will continue to work normally.

## 🙏 Acknowledgments

### Contributors

- **PIATRA** ([@piatra-open-source-projects](https://gitlab.com/piatra-open-source-projects)) - DXT Implementation, Terminal-Notifier Integration, Enhanced Features
- **Michael Darmousseh** ([@turlockmike](https://github.com/turlockmike)) - Original Author of the base implementation

### Special Thanks

- **[Anthropic](https://github.com/anthropics)** - For the MCP protocol and DXT specification
- **[Julien Blanchard](https://github.com/julienXX)** - Creator of [terminal-notifier](https://github.com/julienXX/terminal-notifier)

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

This project maintains the original MIT license from Michael Darmousseh's work and extends the same license to the enhancements made by PIATRA.

## 🔗 Related Projects

- **Original Project**: [turlockmike/apple-notifier-mcp](https://github.com/turlockmike/apple-notifier-mcp)
- **Terminal Notifier**: [julienXX/terminal-notifier](https://github.com/julienXX/terminal-notifier)
- **MCP Protocol**: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)
- **DXT Specification**: [anthropics/dxt](https://github.com/anthropics/dxt)



## Running evals

The evals package loads an mcp client that then runs the index.ts file, so there is no need to rebuild between tests. You can load environment variables by prefixing the npx command. Full documentation can be found [here](https://www.mcpevals.io/docs).

```bash
OPENAI_API_KEY=your-key  npx mcp-eval src/evals/evals.ts src/index.ts
```
## License

MIT License - see the [LICENSE](LICENSE) file for details.
