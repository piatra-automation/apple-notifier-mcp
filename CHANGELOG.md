# Changelog

All notable changes to this enhanced version of apple-notifier-mcp will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.7] - 2025-01-29

### Fixed
- **DXT Packaging**: Switched to official `dxt pack` tool for proper package creation
  - Fixed EISDIR and ENOENT errors during installation
  - Added `.dxtignore` file to exclude unnecessary files (node_modules, source, etc.)
  - Reduced package size from ~34MB to ~170KB

### Changed
- **CI/CD Pipelines**: Simplified to use pre-built DXT files
  - Both GitLab CI and GitHub Actions now expect DXT to be built locally and committed
  - Removed build steps from CI/CD, now just verify and attach existing DXT file
  - Faster and more reliable releases

## [1.1.6] - 2025-01-29

### Fixed
- **manifest.json Refactoring**: Cleaned up and improved DXT manifest structure
  - Corrected tool names to match actual MCP implementation
  - Added all 5 available tools (previously only showed 3)
  - Enhanced tool descriptions with detailed capability information
  - Added comprehensive keywords for better discoverability
  - Added platform specification and dependencies section
  - Improved overall manifest organization and readability

## [1.1.5] - 2025-01-28

### Fixed
- **GitLab CI/CD Pipeline**: Fixed build stages not running after tag creation
  - Added artifact dependencies between jobs
  - Jobs now use TAG_CREATED variable to trigger builds in same pipeline
  - Fixed version detection when building from pipeline-created tags

### Changed
- **CI/CD Simplification**: Removed webhook notification stages from both GitLab and GitHub pipelines
- **Documentation**: Updated CLAUDE.md to reflect simplified pipeline without webhooks

## [1.1.4] - 2025-01-28

### Fixed
- **GitLab CI/CD Protected Branch Support**: Added support for GITLAB_TOKEN to allow pushing tags to protected branches
  - CI now checks for GITLAB_TOKEN first, falls back to CI_JOB_TOKEN
  - Added documentation for setting up Project Access Tokens

### Testing
- Version bump for CI/CD pipeline testing

## [1.1.3] - 2025-01-28

### Fixed
- **GitLab CI/CD Authentication**: Fixed tag push authentication by using `CI_JOB_TOKEN` instead of undefined `CI_TOKEN`
- **GitHub Actions Permissions**: Added explicit `contents: write` permissions to allow tag creation and pushing
- **CI/CD Documentation**: Updated CLAUDE.md to reflect correct authentication requirements

## [1.1.2] - 2025-01-28

### Added
- **GitHub Actions CI/CD**: Added workflow for building and releasing on GitHub (mirrors GitLab functionality)

### Fixed
- **Critical DXT Installation Issue**: Added missing "server" field in manifest.json that was preventing DXT installation
  - Extension now properly installs in Claude Desktop
  - Added required server configuration for stdio-based MCP communication

## [1.1.1] - 2025-01-28

### Added
- **GitLab CI/CD Pipeline**: Automated build and release process for DXT packages
  - Automatic tag creation with `^^^ v0.0.0` and `^!^ v0.0.0` commit patterns
  - Automated DXT package building on version tags
  - GitLab release creation with downloadable DXT assets
  - Optional webhook notifications for releases
- **CLAUDE.md Documentation**: Comprehensive guide for Claude Code instances working with this repository
  - Development commands and build instructions
  - Architecture overview and project structure
  - CI/CD pipeline documentation

### Fixed
- README now accurately reflects that DXT files are available through automated releases

## [1.1.0-enhanced] - 2025-06-28

### Added - PIATRA Enhancements
- **Desktop Extension (DXT) Support**: Complete implementation of Anthropic's DXT specification v0.1
  - One-click installation in Claude Desktop
  - Automatic updates
  - Professional manifest.json with all required fields
  - Build system for creating .dxt packages
- **Terminal-Notifier Integration**: Replaced osascript with terminal-notifier
  - Better notification icon control (Terminal instead of Script Editor)
  - More reliable notification delivery
  - Enhanced customization options
  - Proper dependency checking and error handling
- **Enhanced Documentation**: 
  - Comprehensive README explaining changes and rationale
  - Installation guides for multiple methods
  - Technical documentation for developers
  - Clear attribution to original authors
- **Professional Packaging**:
  - GitLab repository migration
  - Proper author attribution in package.json and manifest.json
  - MIT license maintenance with dual copyright
  - Build scripts for DXT distribution

### Changed - PIATRA Enhancements
- **Notification System**: Migrated from osascript to terminal-notifier
- **Error Handling**: Improved error messages with installation guidance
- **Build System**: Updated to support both npm and DXT packaging
- **Repository URLs**: Updated to GitLab for enhanced version
- **Documentation**: Restructured for better user experience

### Technical Details
- **DXT Compliance**: Full adherence to Anthropic DXT specification
- **Dependency Management**: Automatic checking for terminal-notifier availability
- **Backward Compatibility**: Maintains all original functionality
- **Professional Standards**: Follows modern extension development practices

## [1.1.0] - 2024-12-19 (Original by Michael Darmousseh)

### Added - Original Implementation
- MCP server badge by @punkpeye in #1
- Send native macOS notifications using osascript
- Interactive dialog prompts for user input
- Text-to-speech capabilities with voice customization
- Screenshot capture with multiple formats
- File selection dialog with type filtering
- Comprehensive tool schema definitions
- Error handling and validation
- TypeScript implementation with proper types

### Contributors
- @punkpeye made their first contribution in #1
- @turlockmike (Michael Darmousseh) - Original creator

**Full Changelog**: https://github.com/turlockmike/apple-notifier-mcp/compare/v1.0.0...v1.1.0

## [1.0.0] - 2024-12-19 (Original by Michael Darmousseh)

### Added - Original Release
- Initial release of apple-notifier-mcp
- Basic MCP server functionality
- macOS notification support
- Core tool implementations

**Full Changelog**: https://github.com/turlockmike/apple-notifier-mcp/commits/v1.0.0
