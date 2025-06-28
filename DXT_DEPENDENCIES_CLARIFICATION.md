# 🚨 Important Clarification: DXT vs System Dependencies

## The Question
> "I thought the DXT process handled all the prerequisites. Installing terminal-notifier is a required step before install. Is this explained in the docs?"

## The Answer: Partially Correct ✅

### What DXT Handles Automatically:
- ✅ **Node.js runtime** (Claude Desktop includes it)
- ✅ **npm packages** (bundled in the .dxt file)
- ✅ **MCP server code** (compiled and included)
- ✅ **Configuration** (no JSON editing required)

### What DXT Does NOT Handle:
- ❌ **System-level tools** like `terminal-notifier`
- ❌ **Homebrew packages**
- ❌ **System utilities**
- ❌ **External binaries**

## Why This Design?

### Security & System Integrity
DXT extensions **intentionally cannot** install system-level tools because:
1. **Security**: Extensions shouldn't modify your system without explicit permission
2. **System Integrity**: Prevents potential conflicts or system corruption
3. **User Control**: Users decide what system tools to install

### The Solution: Clear Documentation

We've updated the documentation to make this crystal clear:

#### In README.md:
- ✅ Prerequisites section emphasizes terminal-notifier is required "even for DXT"
- ✅ Installation steps put terminal-notifier FIRST
- ✅ FAQ section explains the difference between MCP and system dependencies
- ✅ Clear explanations of what DXT handles vs. what requires manual installation

#### In manifest.json:
- ✅ System dependencies clearly marked as "must be installed manually"
- ✅ Installation instructions provided
- ✅ Notes explaining DXT limitations

#### Error Handling:
- ✅ Extension detects missing terminal-notifier
- ✅ Provides clear installation guidance
- ✅ Helpful error messages with brew commands

## Updated User Experience

### Before (Confusing):
1. Download .dxt file
2. Install in Claude Desktop
3. Try to use notifications
4. **CONFUSION**: Why isn't it working?

### After (Clear):
1. **Install terminal-notifier**: `brew install terminal-notifier`
2. Download .dxt file  
3. Install in Claude Desktop
4. **SUCCESS**: Everything works immediately

## Key Documentation Updates

1. **Prerequisites section** - terminal-notifier prominently featured
2. **Installation steps** - terminal-notifier installation comes first
3. **FAQ section** - explains DXT vs system dependencies
4. **Error messages** - helpful guidance when dependencies missing
5. **Manifest** - clear notes about manual installation requirements

## The Bottom Line

**DXT is powerful but has intentional limitations.** It handles everything it safely can (MCP server dependencies) while requiring manual installation of system-level tools for security and user control.

The documentation now clearly explains:
- What DXT handles automatically
- What requires manual installation
- Why this design exists
- How to install missing dependencies

This provides the best of both worlds: easy MCP server installation with secure, user-controlled system dependencies.
