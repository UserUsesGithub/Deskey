jslist=input("List all of the keys that are in use here, seperate them with commas. Use the format used in javascript arrays: ")

with open("library.js","r") as l:
    v=l.read()
v=v.replace("VALUE",jslist)
v=v.replace("\n","")
v="javascript:"+v
with open("output.js","w") as l:
    l.write(v)
print(v)
