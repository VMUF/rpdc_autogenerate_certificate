power shell

git config --global --unset user.name
git config --global --unset user.email
git config --global --unset credential.helper
cmdkey /delete:LegacyGeneric:target=git:https://github.com

git config --global user.name "VMUF"
git config --global user.email "researchplaning.2019@gmail.com"

git config credential.helper 'store'
