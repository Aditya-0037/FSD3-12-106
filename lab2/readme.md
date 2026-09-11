# File System (FS module)
FS module directly communicate with operating system rather than browser the common operation on a file or folder are 
- File : Write File , Read File , Append File
- Folder : mkdir/md ,rmdir/rm , readdir
- file metadata : stack , lstsck , rstsck
- watch : watch , unwatch 
- Stream : readStream() ,whaiteStream()

<i>All function are promise so it must be call with await key word </i>