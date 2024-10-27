<script>
    let {details} = $props();
    const {name, subject, ago, content, labels} = $derived(details);
    const options = {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
    };
</script>

<div class="flex px-6 py-4 gap-4 border-b border-b-base-content/10">
    <div>
        <div class="w-10 aspect-square rounded-full bg-base-200 grid place-items-center text-sm text-base-content/70">WS</div>
    </div>
    <div class="flex flex-col gap-1 grow text-base-content/90">
        <div class="font-bold">{name}</div>
        <div class="text-xs">{subject}</div>
        <div class="text-xs">Reply-To: {name.toLowerCase().split(" ").join("")}@example.com</div>
    </div>
    <div class="text-xs text-base-content/70">{ago.toLocaleString("en-US", options)}</div>
</div>


<div class="grow relative">
    <div class="absolute top-0 w-full left-0 h-full overflow-y-auto prose prose-sm max-w-max px-6 py-4">{@html content}</div>
</div>

<div class="px-6 py-4 border-t border-t-base-content/15">
    <textarea class="w-full border border-base-content/15 bg-transparent rounded-btn px-6 py-4 text-sm focus:outline-none focus:border-base-content/40" rows="2" placeholder={`Reply ${name}...`}></textarea>
    <div class="flex justify-between items-center py-4">
        <label class="flex items-center gap-2 text-xs">
            <input type="checkbox" class="toggle toggle-primary toggle-xs" />
            <span>
                Mute this thread
            </span>
        </label>
        <button class="btn btn-sm btn-primary">Send</button>
    </div>
</div>

