<script>
    import { Check } from "lucide-svelte";

    let { items, children, value=$bindable(0) } = $props();
</script>



<div class="dropdown w-full">
    <div tabindex="0" role="button" class="btn w-full btn-sm border border-base-content/15 bg-transparent hover:bg-transparent">
        <img src={items[value].icon} class="w-4" alt=" ">
        {@render children()}
    </div>
    <ul tabindex="-1" class="dropdown-content mt-1 menu menu-sm bg-base-100 rounded-btn z-[1] w-full p-2 shadow border border-base-content/15">
        {#each items as item,i}
            <li>
                <button class="!cursor-default" onclick={()=>{value=i;window.document.documentElement.focus()}}>
                    <img src={item.icon} class="w-4" alt="">
                    <span class="grow pl-1">
                        {item.value}
                    </span>
                    {#if value==i}
                        <Check class="w-3"/>
                    {/if}
                </button>
            </li>
        {/each}
    </ul>
</div>

