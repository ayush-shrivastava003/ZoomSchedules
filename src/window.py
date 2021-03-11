import tkinter as tk

class Window():
    def __init__(self):
        root = tk.Tk()
        root.geometry('400x200')

        label = tk.Label(root, text = 'ZoomSchedules')
        label.pack(padx = 0, pady = 0)

        root.mainloop()
