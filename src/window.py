import tkinter as tk

import main

class Window():
    def __init__(self):
        self.bgcol = '#333333'
        self.lightcol = '#EEEEEE'

        root = tk.Tk()
        root.configure(bg = self.bgcol)
        root.geometry('800x600')
        root.title('Zoom Schedules')

        title = tk.Label(root, text = 'ZoomSchedules', font = 'Helvetica 40 bold', fg = self.lightcol, bg = self.bgcol)
        title.pack(padx = 0, pady = 15)

        grid = tk.Grid()

        root.mainloop()

    #def entries(self):

class Table():
    def __init__(self):
        