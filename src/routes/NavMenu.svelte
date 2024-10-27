<script>
    import {theme} from "$lib/stores";
    import { Archive, Sun, Moon, ArchiveX, CircleAlert, File, Inbox, MessagesSquare, Send, ShoppingCart, Trash2, Users } from "lucide-svelte";

    function switch_theme() {
        $theme = $theme == "light" ? "dark" : "light";
    }

</script>
<div class="p-2 border-t border-t-base-content/5">
    <ul class="menu menu-sm p-0 gap-2">
        <li><button class="bg-primary text-primary-content hover:bg-primary"><Inbox class="w-4"/> <span class="grow">Inbox</span> 147 </button></li>
        <li><button><File class="w-4"/> <span class="grow">Drafts</span> 4</button></li>
        <li><button><Send class="w-4"/> <span class="grow">Sent</span> </button></li>
        <li><button><ArchiveX class="w-4"/> <span class="grow">Junk</span> 12 </button></li>
        <li><button><Trash2 class="w-4"/> <span class="grow">Trash</span>  </button></li>
        <li><button><Archive class="w-4"/> <span class="grow">Archive</span>  </button></li>
    </ul>
</div>
<div class="p-2 border-t border-t-base-content/5">
    <ul class="menu menu-sm p-0 gap-2">
        <li><button><Users class="w-4"/> <span class="grow">Social</span> 747 </button></li>
        <li><button><CircleAlert class="w-4"/> <span class="grow">Updates</span> 324</button></li>
        <li><button><MessagesSquare class="w-4"/> <span class="grow">Forums</span> 147</button></li>
        <li><button><ShoppingCart class="w-4"/> <span class="grow">Shopping</span> 12 </button></li>
        <li><button><Archive class="w-4"/> <span class="grow">Promotions</span>  21</button></li>
        <li><button class="mt-4" onclick={switch_theme}><svelte:component this={$theme=="light"?Sun:Moon} class="w-4"/> <span class="grow">Theme</span></button></li>
    </ul>
</div>


<style>
    ul.menu li button {
        gap: .6rem;
        font-size: 13px;
    }
</style>
