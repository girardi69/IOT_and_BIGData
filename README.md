lo cambio ancora una volta  
This is the master branch.  
Now I'm am on my PC and I'm able to commit from here on the master branch.
Now I'm changing two files in the same commit.  

My journey on machine learning

It all started on 2016. Previously Machine Learning (ML) was a intuition on how numbers and data can help me to solve real problems. Between real problems, one I consider most important for me is mastering running techniques, that is I use numbers for running, and when I run. The first encounter was with a repository present in Github, "Machine Learning for Software Engineers", that showed me the graph of the houses prices compared to the location. It worked in the iPad and was an example of classification. More examples came, all with a fascination of something not known. The next step was the first technical approach, with the three methods of machine learning: supervised, unsupervised and by reinforcement. I came also on an intereting method that was explaining how to memorize things, with the flip card method.
Learning by heart the first concepts was something necessary, therefore I put on my flip cards the ML methods and I started repeating. It was funny, my daughter was asking me the methods all the afternoon, and at the end my daughter was learning better than me!
7May17 Created my first ML dataset from Strava, exctracting the Prague Marathon results and combining with the
10May17 Machine Learning presentation in Maserati 13May17 Today I created my first Kaggle Dataset on Marathon running and I submitted my first prediction

Cybersecurity OAUTH PKI Certificates Cryptography

DevOps Git Github  

Cloud AWS  

Language Frontend: HTML, CSS, Javascript Full-Stack: Javascript, ES6 Full-Stack:Python  
1May16 AWS Account created
10May16 First Wordpress website created
9Jun18 Oracle: Oauth Understanding  
21Oct18 Freecodecamp  

25Oct18 Again on freeCodeCamp with javascript  
26Oct18 Udemy Javascript for beginners Discover VisualStudioCODE  
9Nov18 Started understand Git  
10Nov18 Git flow implemented with ATOM  
11Nov18 End of Javascript ES6 and switch to git  
pause to work  
15Dec18 Udemy AWS Developer: S3  
16Dec18  
22Dec18 Git Flow Rebase  
23Dec18 Git Flow Practice  
24Dec18 Git Branching  
25Dec18 Udemy Cryptography: Cipher, Hashing  
26Dec18 Udemy Cryptography: Asymmetric Cryptography, Certificates, PKI  
27Dec18 Udemy AWS Developer: IAM, EC2, WinSSH, Putty, Security Groups, Load Balancers  
28Dec18 Udemy AWS Developer: S3  
29Dec18 Udemy AWS Developer: AWS CLI, Elastic Beanstalk  
30Dec18 Udemy AWS Developer: CICD, CodeCommit  
31Dec18 Udemy AWS Developer: CloudFormation  
1Jan19 Udemy AWS Developer: Elastic Beanstalk Reinforcement  
2Jan19 Udemy AWS Developer: Cloudwatch, X-Ray, Cloudtrail  
3Jan19 Udemy AWS Certified Sysops Admin: VPCs  
7Jan19 Udemy AWS Certified Sysops Admin: High Availability  
12Jan19 AWS IoT account setup w/beanstalk  
20Jan19 Udemy AWS Developer: Lambda (5h)  
26Jan19 Udemy AWS Developer: DynamoDB (5h 18/18)  

_Letters are shown capitalized for readability only._  _Capslock should be off._
## SHORTCUTS

| Key/Command | Description |
| ----------- | ----------- |
| Ctrl + A   | Go to the beginning of the line you are currently typing on.  This also works for most text input fields system wide.  Netbeans being one exception |
| Ctrl + E   | Go to the end of the line you are currently typing on.  This also works for most text input fields system wide.  Netbeans being one exception |
| Ctrl + Q   | Clears everything on current line |
| Ctrl + L   | Clears the Screen |
| Cmd + K    | Clears the Screen |
| Ctrl + U   | Cut everything backwards to beginning of line |
| Ctrl + K   | Cut everything forward to end of line |
| Ctrl + W   | Cut one word backwards using white space as delimiter |
| Ctrl + Y   | Paste whatever was cut by the last cut command |
| Ctrl + H   | Same as backspace |
| Ctrl + C   | Kill whatever you are running |
| Ctrl + D   | Exit the current shell when no process is running, or send EOF to a the running process |
| Ctrl + Z   | Puts whatever you are running into a suspended background process. fg restores it. |
| Ctrl + _   | Undo the last command. (Underscore.  So it's actually Ctrl + Shift + minus) |
| Ctrl + T   | Swap the last two characters before the cursor |
| Ctrl + F   | Move cursor one character forward |
| Ctrl + B   | Move cursor one character backward |
| Option + →  | Move cursor one word forward |
| Option + ←  | Move cursor one word backward |
| Esc + T  | Swap the last two words before the cursor |
| Tab  | Auto-complete files and folder names |

## CORE COMMANDS

| Key/Command | Description |
| ----------- | ----------- |
| cd [folder] | Change directory e.g. `cd Documents` |
| cd |  Home directory |
| cd ~ |  Home directory |
| cd /  | Root of drive |
| cd -  | Previous directory |
| ls | Short listing |
| ls -l | Long listing |
| ls -a | Listing incl. hidden files |
| ls -lh| Long listing with Human readable file sizes |
| ls -R | Entire content of folder recursively |
| sudo [command] | Run command with the security privileges of the superuser (Super User DO) |
| open [file] | Opens a file ( as if you double clicked it ) |
| top | Displays active processes. Press q to quit |
| nano [file] | Opens the file using the nano editor |
| vim [file] | Opens the file using the vim editor |
| clear |  Clears the screen |
| reset |  Resets the terminal display |

## CHAINING COMMANDS

| Key/Command | Description |
| ----------- | ----------- |
| [command-a]; [command-b] | Run command A and then B, regardless of success of A |
| [command-a] && [command-b] | Run command B if A succeeded |
| [command-a] \|\| [command-b] | Run command B if A failed |
| [command-a] & | Run command A in background |


## PIPING COMMANDS

| Key/Command | Description |
| ----------- | ----------- |
| [command-a] \| [command-b] | Run command A and then pass the result to command B e.g ps auxwww \| grep google |


## COMMAND HISTORY

| Key/Command | Description |
| ----------- | ----------- |
| history n |  Shows the stuff typed – add a number to limit the last n items |
| Ctrl + r  | Interactively search through previously typed commands |
| ![value] |  Execute the last command typed that starts with ‘value’ |
| ![value]:p |  Print to the console the last command typed that starts with ‘value’ |
| !! |  Execute the last command typed |
| !!:p |  Print to the console the last command typed |

## FILE MANAGEMENT

| Key/Command | Description |
| ----------- | ----------- |
| touch [file] |   Create a new file |
| pwd | Full path to working directory |
| . |  Current folder, e.g. `ls .` |
| .. | Parent/enclosing directory, e.g. `ls ..` |
| ls -l .. | Long listing of parent directory |
| cd ../../ | Move 2 levels up |
| cat | Concatenate to screen |
| rm [file] |  Remove a file, e.g. `rm data.tmp` |
| rm -i [file] | Remove with confirmation |
| rm -r [dir] | Remove a directory and contents |
| rm -f [file] | Force removal without confirmation |
| cp [file] [newfile] | Copy file to file |
| cp [file] [dir] | Copy file to directory |
| mv [file] [new filename] |  Move/Rename, e.g. `mv file1.ad /tmp` |
| pbcopy < [file] | Copies file contents to clipboard |
| pbpaste | Paste clipboard contents |
| pbpaste > [file] | Paste clipboard contents into file, `pbpaste > paste-test.txt` |

## DIRECTORY MANAGEMENT

| Key/Command | Description |
| ----------- | ----------- |
| mkdir [dir] | Create new directory |
| mkdir -p [dir]/[dir] |  Create nested directories |
| rmdir [dir] | Remove directory ( only operates on empty directories ) |
| rm -R [dir] | Remove directory and contents |
| less [file]|  Output file content delivered in screensize chunks |
| [command] > [file] |  Push output to file, keep in mind it will get overwritten |
| [command] >> [file] | Append output to existing file |
| [command] < [file] |  Tell command to read content from a file |

## SEARCH

| Key/Command | Description |
| ----------- | ----------- |
| find [dir] -name [search_pattern] | Search for files, e.g. `find /Users -name "file.txt"` |
| grep [search_pattern] [file] | Search for all lines that contain the pattern, e.g. `grep "Tom" file.txt` |
| grep -r [search_pattern] [dir] | Recursively search in all files in specified directory for all lines that contain the pattern |
| grep -v [search_pattern] [file] | Search for all lines that do NOT contain the pattern |
| grep -i [search_pattern] [file] | Search for all lines that contain the case-insensitive pattern |
| mdfind [search_pattern] | Spotlight search for files (names, content, other metadata), e.g. `mdfind skateboard` |
| mdfind -onlyin [dir] -name [pattern] | Spotlight search for files named like pattern in the given directory |

## HELP

| Key/Command | Description |
| ----------- | ----------- |
| [command] -h |  Offers help |
| [command] --help | Offers help |
| info [command] | Offers help |
| man [command] |  Show the help manual for [command] |
| whatis [command] | Gives a one-line description of [command] |
| apropos [search-pattern] | Searches for command with keywords in description |

Thursday, December 11, 2008
Vi[m]
Vi is an one of two powerhouse text editors in the Unix world, the other being EMACS. While obtuse, vi is extremely powerful and efficient. There may be times when vi is the only text editor available, so it helps to at least know the basics.

On Mac OS X (and Linux), vi is symlinked to vim (vi improved), a more modern free software version. Vim It is the default editor when changing a crontab.

If you gave vi a whirl and don't see the beauty of it, give the nano editor a try. It also ships with Mac OS X.

note: a chunk of this small guide came from a web page I found long ago, but I don't remember where so I can't give proper credit. I've added and changed things from the original text.

Vi has two modes, command and insert (really, three if you count replace mode). Command mode is used to navigate, search, and issue other commands. Insert mode is used to enter text.

Vi starts in command mode.

You can precede most commands with a number indicating how many times to perform a command. For example, entering 99 followed by the down arrow will move the cursor down 99 lines. "99x" will delete 99 characters.

While in command mode (case sensitive)
move the cursor with arrow keys; if there aren't any arrow keys, use j,k,h,l
i - change to insert mode (before cursor)
a - change to insert mode (after cursor)
A - change to insert mode (at end of line)
r - replace one character
R - overwrite text
x - delete one character
dd - delete one line
yy - yank line (copy)
p - paste deleted or yanked text after cursor
P - paste deleted or yanked text before cursor
G - go to end of the file
1G - go to top of the file
J - merge next line with this one
/ - search, follow / with text to find
:wq - write file and quit
:q! - quit without saving
%s/old/new/g - substitute; replace "old" with "new" on all lines
:g/pattern/d - delete all lines that match the pattern
While in insert mode
ESC - change to command mode
any text typed is entered at the cursor
Typical vi session
Type "vi file.txt" at command prompt
Move cursor to where new text will be added
Type "i" to change to insert mode
Type new text
Type ESC to go back to command mode  
type ":wq" and ENTER to write the file and quit  


git config --global --edit  
questo comando ha cambiato il committente del codice. ho dovito aprire il file e usare vim  
git commit --amend --reset-author  
