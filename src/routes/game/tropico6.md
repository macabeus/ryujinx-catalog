---
title: 'Tropico 6'
coverImage: '/gamesCoverImage/tropico6.jpg'
tags:
  - crash
  - boots
---

Crashes in early splash screens.

```
HLE.OsThread.7 Cpu PrintGuestStackTrace: Guest stack trace:
Process: Service, PID: 84


00:01:37.506 |E| HLE.OsThread.7 Cpu InvalidAccessHandler: Invalid memory access at virtual address 0x00000009D6A00000.
00:01:37.519 |E| HLE.OsThread.7 Application : Unhandled exception caught: Ryujinx.Memory.InvalidMemoryRegionException: Attempted to access a invalid memory region.
   at Ryujinx.Memory.MemoryBlock.ThrowInvalidMemoryRegionException() in C:\projects\ryujinx\Ryujinx.Memory\MemoryBlock.cs:line 288
   at Ryujinx.Memory.WritableRegion.Dispose() in C:\projects\ryujinx\Ryujinx.Memory\WritableRegion.cs:line 23
   at Ryujinx.Audio.Renderer.Server.AudioRenderSystem.Dispose(Boolean disposing) in C:\projects\ryujinx\Ryujinx.Audio.Renderer\Server\AudioRenderSystem.cs:line 834
   at Ryujinx.HLE.HOS.Services.ServerBase.Process(Int32 serverSessionHandle, UInt64 recvListAddr) in C:\projects\ryujinx\Ryujinx.HLE\HOS\Services\ServerBase.cs:line 264
   at Ryujinx.HLE.HOS.Services.ServerBase.ServerLoop() in C:\projects\ryujinx\Ryujinx.HLE\HOS\Services\ServerBase.cs:line 132
   at Ryujinx.HLE.HOS.Kernel.Threading.KThread.ThreadStart() in C:\projects\ryujinx\Ryujinx.HLE\HOS\Kernel\Threading\KThread.cs:line 1031
   at System.Threading.ThreadHelper.ThreadStart_Context(Object state)
   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
--- End of stack trace from previous location ---
   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
   at System.Threading.ThreadHelper.ThreadStart()
```