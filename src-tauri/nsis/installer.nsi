; LocalSearch Pro NSIS Branding Configuration
; This file customizes the Windows installer appearance

; Brand colors
!define MUI_BGCOLOR "FFFFFF"
!define MUI_TEXTCOLOR "1e1e2e"
!define MUI_INSTCOLORS "2563EB FFFFFF"

; Sidebar images (welcome and finish)
!define MUI_WELCOMEFINISHPAGE_BITMAP "${NSISDIR}\Contrib\Graphics\Wizard\win.bmp"
!define MUI_UNWELCOMEFINISHPAGE_BITMAP "${NSISDIR}\Contrib\Graphics\Wizard\win.bmp"

; Custom strings
LangString MUI_TEXT_WELCOME_INFO_TITLE "0x" "欢迎使用 LocalSearch Pro"
LangString MUI_TEXT_WELCOME_INFO_TEXT "0x" "LocalSearch Pro 是一款全离线本地文件智能检索工具。$\r$\n$\r$\n隐私零泄露 · 内容级检索 · 中文语义友好 · 毫秒级响应$\r$\n$\r$\n点击下一步开始安装。"

; License page customization
LangString MUI_TEXT_LICENSE_TITLE "0x" "许可协议"
LangString MUI_TEXT_LICENSE_SUBTITLE "0x" "请在安装前阅读以下许可协议。"

; Components page customization
LangString MUI_TEXT_COMPONENTS_TITLE "0x" "选择组件"
LangString MUI_TEXT_COMPONENTS_SUBTITLE "0x" "选择要安装的功能组件。"

; Directory page customization
LangString MUI_TEXT_DIRECTORY_TITLE "0x" "选择安装位置"
LangString MUI_TEXT_DIRECTORY_SUBTITLE "0x" "选择 LocalSearch Pro 的安装文件夹。"

; Installation page customization
LangString MUI_TEXT_INSTALLING_TITLE "0x" "正在安装"
LangString MUI_TEXT_INSTALLING_SUBTITLE "0x" "请稍候，正在安装 LocalSearch Pro..."

; Finish page customization
LangString MUI_TEXT_FINISH_TITLE "0x" "安装完成"
LangString MUI_TEXT_FINISH_SUBTITLE "0x" "LocalSearch Pro 已成功安装到您的计算机。"
LangString MUI_TEXT_FINISH_INFO_TITLE "0x" "完成 LocalSearch Pro 安装向导"
LangString MUI_TEXT_FINISH_INFO_TEXT "0x" "LocalSearch Pro 已安装到您的计算机。$\r$\n$\r$\n点击完成关闭此向导。"

; Uninstaller strings
LangString MUI_UNTEXT_CONFIRM_TITLE "0x" "确认卸载"
LangString MUI_UNTEXT_CONFIRM_SUBTITLE "0x" "确定要卸载 LocalSearch Pro 吗？"
LangString MUI_UNTEXT_UNINSTALLING_TITLE "0x" "正在卸载"
LangString MUI_UNTEXT_UNINSTALLING_SUBTITLE "0x" "请稍候，正在卸载 LocalSearch Pro..."
LangString MUI_UNTEXT_FINISH_TITLE "0x" "卸载完成"
LangString MUI_UNTEXT_FINISH_SUBTITLE "0x" "LocalSearch Pro 已成功从您的计算机中卸载。"
