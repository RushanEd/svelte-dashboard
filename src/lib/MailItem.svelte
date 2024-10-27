<script>
    import { onMount } from "svelte";


    let { details, selected, i, set_selected_email } = $props();
    const {name, subject, ago, content, labels} = details;

    function timeSince(date) {
        const formatter = new Intl.RelativeTimeFormat('en');
        const ranges = {
            years: 3600 * 24 * 365,
            months: 3600 * 24 * 30,
            weeks: 3600 * 24 * 7,
            days: 3600 * 24,
            hours: 3600,
            minutes: 60,
            seconds: 1
        };
        const secondsElapsed = (date.getTime() - Date.now()) / 1000;
        for (let key in ranges) {
            if (ranges[key] < Math.abs(secondsElapsed)) {
                const delta = secondsElapsed / ranges[key];
                return formatter.format(Math.round(delta), key);
            }
        }
    }

    let ago_string = $derived(timeSince(ago));

    function stripHtml(html) {
        const tempDiv = document.createElement('div');
        tempDiv.style.display="none";
        tempDiv.innerHTML = html;
        return tempDiv.textContent || "";
    }

    let nice_content = $state("");
    onMount(()=>{
        nice_content = stripHtml(content);
    });


</script>

<button
    class={"border border-base-content/15 rounded-btn text-sm py-2 px-4 text-left cursor-pointer hover:bg-base-200/40 " + (selected?"bg-base-200/60 hover:bg-base-200/60":"")}
    style="transition: background .1s ease;"
    onclick={set_selected_email}
    >
    <div class="flex my-2 justify-between items-center">
        <div class="font-bold">{name}</div>
        <span class="text-xs text-base-content/75">{ago_string}</span>
    </div>
    <div class="my-2 text-xs">{subject}</div>
    <div class="my-2 text-xs text-base-content/50 line-clamp-2">{nice_content}</div>
    <div class="flex gap-2">
        {#each labels as {name, style}}
            <div class={"x-label "+style}>{name}</div>
        {/each}
    </div>
</button>
