# jxa-definition-to-evernote

An AppleScript
([jxa](https://developer.apple.com/library/mac/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/))
to easily add dictionary definitions to Evernote.

## Prerequisites

### Evernote

Evernote for Mac must be installed.

### sdcv

[Homepage](http://sdcv.sourceforge.net/)

1. It can be installed with [Homebrew](http://brew.sh/) `brew install sdcv` on OS X.
2. Download the dictionaries you want. [A list of dictionaries you can
use](http://abloz.com/huzheng/stardict-dic/dict.org/).
3. Make the directory where sdcv looks for dictionaries: `sudo mkdir -p
/usr/share/stardict/dic/`
4. Unzip the dictionaries and put their folders in the new directory.

*Thanks to [green7](http://askubuntu.com/users/83046/green7) on
[askubuntu](http://askubuntu.com/) for their
[install instructions](http://askubuntu.com/a/191268).*
