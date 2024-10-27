<script>
    import { Archive, CornerUpLeft, ReplyAll, CornerUpRight, EllipsisVertical, ArchiveX, Clock } from "lucide-svelte";
    import { onMount } from "svelte";
    import tippy from 'tippy.js';
    import 'tippy.js/dist/tippy.css';
    import 'tippy.js/animations/shift-away.css';

    onMount(()=>{
        tippy('[data-tippy-content]',{
            animation: 'shift-away',
            arrow: false,
            distance: 0,
            duration: 200
            }
        );
    })

</script>
<div class="p-2 flex justify-between border-b border-b-base-content/10">
    <div class="flex gap-4 items-center">
        <button data-tippy-content="Archive" class="btn btn-sm btn-square btn-ghost hover:bg-base-200"> <Archive class="w-4"/> </button>
        <button data-tippy-content="Move to junk" class="btn btn-sm btn-square btn-ghost hover:bg-base-200"> <ArchiveX class="w-4"/> </button>
        <button data-tippy-content="Move to trash" class="btn btn-square btn-ghost hover:bg-base-200 btn-sm"> <Archive class="w-4"/> </button>
        <div class="h-6 mx-2 border-r border-r-base-content/15"></div>
        <button data-tippy-content="Snooze" class="btn btn-square btn-ghost hover:bg-base-200 btn-sm"> <Clock class="w-4"/> </button>
    </div>
    <div class="flex gap-4 items-center">
        <button data-tippy-content="Reply" class="btn btn-square btn-ghost hover:bg-base-200 btn-sm"> <CornerUpLeft class="w-4"/> </button>
        <button data-tippy-content="Reply all" class="btn btn-square btn-ghost hover:bg-base-200 btn-sm"> <ReplyAll class="w-4"/> </button>
        <button data-tippy-content="Forward" class="btn btn-square btn-ghost hover:bg-base-200 btn-sm"> <CornerUpRight class="w-4"/> </button>
        <div class="h-6 mx-2 border-r border-r-base-content/15"></div>
        <button class="btn btn-square btn-ghost hover:bg-base-200 btn-sm"> <EllipsisVertical class="w-4"/> </button>
    </div>
</div>
