# Attribution and Acknowledgments

## Current Maintainers

**PIATRA** ([@piatra-open-source-projects](https://gitlab.com/piatra-open-source-projects))
- **Repository**: https://gitlab.com/piatra-open-source-projects/apple-notifier-mcp
- **Copyright**: Copyright (c) 2025 PIATRA
- **License**: MIT License

### PIATRA Contributions
- **Desktop Extension (DXT) Implementation**: Complete migration to Anthropic's DXT specification v0.1
- **Terminal-Notifier Integration**: Replaced osascript with terminal-notifier for better notification control
- **Enhanced User Experience**: One-click installation, automatic updates, improved error handling
- **Professional Packaging**: Modern build system, comprehensive documentation, proper attribution
- **Improved Architecture**: Better dependency management, security enhancements, maintainable code structure
- **CI/CD Pipelines**: Automated releases for both GitLab and GitHub
- **Comprehensive Documentation**: Installation guides, technical documentation, troubleshooting

## Original Work

This repository is based on a fork of the **apple-notifier-mcp** project originally created by:

- **Author**: Michael Darmousseh ([@turlockmike](https://github.com/turlockmike))
- **Original Repository**: https://github.com/turlockmike/apple-notifier-mcp
- **License**: MIT License
- **Original Copyright**: Copyright (c) 2024 Michael Darmousseh

### Original Features by Michael Darmousseh
- MCP (Model Context Protocol) server implementation
- macOS notification system using osascript
- Interactive dialog prompts for user input
- Text-to-speech capabilities with voice customization
- Screenshot capture functionality with multiple formats
- File selection dialog with type filtering
- TypeScript implementation with comprehensive type definitions
- Error handling and validation framework
- Tool schema definitions and MCP protocol compliance

## Third-Party Dependencies and Tools

### Core Dependencies
- **[@modelcontextprotocol/sdk](https://github.com/modelcontextprotocol/sdk)** - MCP protocol implementation
- **[mcp-evals](https://github.com/modelcontextprotocol/evals)** - Testing framework for MCP servers

### System Dependencies
- **[terminal-notifier](https://github.com/julienXX/terminal-notifier)** by Julien Blanchard
  - Enhanced notification system for macOS
  - Better icon control and reliability
  - MIT License

### Development Tools
- **TypeScript** - Language and compiler
- **Node.js** - Runtime environment
- **DXT CLI** - Desktop Extension packaging tool

## Specifications and Standards

- **[Model Context Protocol (MCP)](https://github.com/modelcontextprotocol/servers)** by Anthropic
- **[Desktop Extensions (DXT) Specification](https://github.com/anthropics/dxt)** by Anthropic
- **[Semantic Versioning](https://semver.org/)** for version management
- **[Keep a Changelog](https://keepachangelog.com/)** for change documentation

## License Compliance

This project maintains full compliance with the original MIT license from Michael Darmousseh's work. The enhancements by PIATRA are also released under the MIT license, ensuring:

- **Original Attribution Preserved**: Michael Darmousseh is credited as the original author
- **Enhancement Attribution**: PIATRA is credited for the DXT and terminal-notifier enhancements
- **License Continuity**: MIT license maintained for both original and enhanced work
- **Source Transparency**: Clear documentation of what was original vs. enhanced
- **Community Friendly**: Same permissive license allows continued open source development

## Recognition and Thanks

Special thanks to:

1. **Michael Darmousseh** for creating the solid foundation that made these enhancements possible
2. **Anthropic** for the MCP protocol and DXT specification that enables better AI tool integration
3. **Julien Blanchard** for terminal-notifier, which solved the notification icon limitation
4. **The MCP Community** for the open protocol that enables AI tool interoperability
5. **Open Source Contributors** who make projects like this possible

## How to Contribute

Both the original and enhanced versions welcome contributions:

- **Enhanced Version (This Repository)**: [piatra-open-source-projects/apple-notifier-mcp](https://gitlab.com/piatra-open-source-projects/apple-notifier-mcp)
- **Original Version**: [turlockmike/apple-notifier-mcp](https://github.com/turlockmike/apple-notifier-mcp)

Please respect the contribution guidelines of each repository and maintain proper attribution for all work.