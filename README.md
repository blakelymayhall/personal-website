# personal-website
repo for Blakely Mayhall's personal website

# Issue / Feature Tracking 
Handled in Jira
- https://blakelycmayhall.atlassian.net/jira/software/projects/PW/boards/3

# Git strategy 
- Git strategy will be feature branches off main
- Branch names will follow the following criteria:
	- Phase branches: \<JiraTag>_\<shortname>
	- Feature branches: \<JiraTag>_\<shortname>

```mermaid
%%{ init: { 'theme': 'base', 'themeVariables': { 'primaryColor': '#BB2528', 'primaryTextColor': '#fff', 'primaryBorderColor': '#7C0000', 'lineColor': '#F8B229', 'secondaryColor': '#006100', 'tertiaryColor': '#fff' } } }%%
gitGraph
   commit
   commit
   branch pw-issue1
   checkout pw-issue1
   commit
   commit
   checkout main
   merge pw-issue1
   commit
   commit
```
