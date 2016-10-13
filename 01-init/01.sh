# init s dialogom
npm init

# preskocenie dialogu
npm init --yes

# nastavenie defaultnych hodnot
npm set init.author.name "Richard Fridrich"
npm set init.author.email "riki@fczbkk.com"
npm set init.license "MIT"

# otvorenie editoru defaultnych hodnot
npm config edit

# vytvorenie aliasu
atom ~/.bashrc
alias ni="npm init --yes"
. ~/.bashrc