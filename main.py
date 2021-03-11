import schedule
import webbrowser
import json
import time

no_classes = True

NumberOfClasses = None
path = None
MondayLinks = []
TuesdayLinks = []
WednesdayLinks = []
ThursdayLinks = []
FridayLinks = []

days = {'monday' : MondayLinks, 'tuesday' : TuesdayLinks, 'wednesday' : WednesdayLinks, 'thursday' : ThursdayLinks, 'friday' : FridayLinks}

def open_url(url):
    webbrowser.open_new_tab(url)
    print(f'{time.asctime()}: Opened a new tab.')

def make_schedule():
    for Classes in range(data[0]["number of classes"]):
        schedule.every().monday.at(days['monday'][Classes][1]).do(open_url, url = days['monday'][Classes][0])
        schedule.every().monday.at(days['tuesday'][Classes][1]).do(open_url, url = days['tuesday'][Classes][0])
        schedule.every().wednesday.at(days['wednesday'][Classes][1]).do(open_url, url = days['wednesday'][Classes][0])
        schedule.every().thursday.at(days['thursday'][Classes][1]).do(open_url, url = days['thursday'][Classes][0])
        schedule.every().friday.at(days['friday'][Classes][1]).do(open_url, url = days['friday'][Classes][0])

os = input('Which operating system are you using (MacOS or Windows)?:')
name = input('What is the name that you use for your school email (ex. ashrivastava2)?: ')

if 'Mac' in os:
    print('You are using MacOS.')
    path = f'/Users/{name}/Downloads/ZoomSchedules/SavedSchedule.json'

elif 'Windows' in os:
    print('You are using Windows OS.')
    path = 'SavedSchedule.json'

savedschedule = open(path, 'r')
char = savedschedule.read(1)

#no previous schedule
if not char:
    print('Looks like you don\'t have a schedule.')

    #loop for try/except
    while no_classes:

        #create schedule
        try:
            NumberOfClasses = int(input('Enter the number of classes you take per day: '))
            print(f'You take {NumberOfClasses} classes.')

            #iterates through the days of the week
            for day in days:
                #inputs to determine class time + link
                for Class in range(NumberOfClasses):
                    class_link = input(f'Enter the link for class {Class+1} of {NumberOfClasses} on {day} (ex https://www.zoom.us/j/738912): ')
                    class_time = input(f'Enter the time for class {Class+1} of {NumberOfClasses} on {day} (ex. 08:25 or 22:45): ')

                    #if class time was not formatted correctly
                    if len(class_time) < 5:
                        class_time = '0' + class_time

                    days[day].append((class_link, class_time))

            #actually starts to schedule everything
            make_schedule()

            #breaks out of the loop
            no_classes = False

        #input given was not an integer
        except ValueError:
            print('it has to be an integer dumdum')
            continue
        
    #confirmation with no errors
    print('Successfully scheduled everything!')

    #saves created schedule to json file
    with open(path, 'w') as openedfile:
        info = {'schedule' : days, 'number of classes' : NumberOfClasses}
        json.dump(info, openedfile)

#schedule found in json file
else:
    print('You already have a schedule.')

    #copies previous schedule to dictionary
    savedschedule = open(path, 'r')
    data = []
    for line in savedschedule:
        data.append(json.loads(line))

    NumberOfClasses = data[0]["number of classes"]
    days = data[0]["schedule"]

    #schedules again
    make_schedule()

    print('Scheduled all classes. Waiting...')

#waits for pending tasks and runs them
while True:
    schedule.run_pending()
    time.sleep(1)