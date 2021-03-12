import tkinter as tk

class Window():
    def __init__(self):
        root = tk.Tk()
        root.geometry('800x600')
        root.title('Zoom Schedules')

        title = tk.Label(root, text = 'ZoomSchedules', font = 'Helvetica 40 bold')
        title.pack(padx = 0, pady = 0)

        grid = tk.Grid()
        

        root.mainloop()
