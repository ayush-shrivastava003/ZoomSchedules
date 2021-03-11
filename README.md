# ZoomSchedules

ok so if you don't have a schedule it will help you make one (or you can just edit the json file manually idc)
if you close the program you won't have to remake the schedule cause it'll look at the json file
you should leave this running in the background during the day


if you wanna know how it works i'll explain it:

ok so the main thing is a dictionary and this dictionary has a key for each day of the week
each key is tied to a list and each list will have a tuple
the number of tuples in the list is based on how many classes you take each day
each tuple has two items: the link for the class and the time for the class
oh there's also another thing in the json file that says how many classes you take cause that's also pretty important
ok that's it