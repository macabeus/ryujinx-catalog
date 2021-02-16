import { t as text, m as claim_text, i as insert_dev, d as detach_dev, h as dispatch_dev, o as create_slot, e as element, k as space, c as claim_element, a as children, l as claim_space, p as set_custom_element_data, f as add_location, g as append_dev, u as update_slot, q as transition_in, r as transition_out, w as validate_each_argument, x as validate_each_keys, y as set_style, z as add_render_callback, A as add_resize_listener, B as listen_dev, C as group_outros, D as update_keyed_each, E as outro_and_destroy_block, F as check_outros, v as validate_slots, G as tick, H as onMount, I as binding_callbacks, S as SvelteComponentDev, j as init, s as safe_not_equal, J as create_component, K as claim_component, L as mount_component, M as destroy_component, b as attr_dev, N as destroy_each } from '../index-96466d9a.js';
import '../tagsFilter-23b6c8d4.js';
import './Tag.4a56e822.js';
import './Tags.7fe25aaf.js';
import GameTeaser from './GameTeaser.a00773f6.js';

/* node_modules/@sveltejs/svelte-virtual-list/VirtualList.svelte generated by Svelte v3.29.7 */
const file = "node_modules/@sveltejs/svelte-virtual-list/VirtualList.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[23] = list[i];
	return child_ctx;
}

const get_default_slot_changes = dirty => ({ item: dirty & /*visible*/ 16 });
const get_default_slot_context = ctx => ({ item: /*row*/ ctx[23].data });

// (166:26) Missing template
function fallback_block(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Missing template");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Missing template");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: fallback_block.name,
		type: "fallback",
		source: "(166:26) Missing template",
		ctx
	});

	return block;
}

// (164:2) {#each visible as row (row.index)}
function create_each_block(key_1, ctx) {
	let svelte_virtual_list_row;
	let t;
	let current;
	const default_slot_template = /*#slots*/ ctx[13].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[12], get_default_slot_context);
	const default_slot_or_fallback = default_slot || fallback_block(ctx);

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			svelte_virtual_list_row = element("svelte-virtual-list-row");
			if (default_slot_or_fallback) default_slot_or_fallback.c();
			t = space();
			this.h();
		},
		l: function claim(nodes) {
			svelte_virtual_list_row = claim_element(nodes, "SVELTE-VIRTUAL-LIST-ROW", { class: true });
			var svelte_virtual_list_row_nodes = children(svelte_virtual_list_row);
			if (default_slot_or_fallback) default_slot_or_fallback.l(svelte_virtual_list_row_nodes);
			t = claim_space(svelte_virtual_list_row_nodes);
			svelte_virtual_list_row_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_custom_element_data(svelte_virtual_list_row, "class", "svelte-6oopgv");
			add_location(svelte_virtual_list_row, file, 164, 3, 3558);
			this.first = svelte_virtual_list_row;
		},
		m: function mount(target, anchor) {
			insert_dev(target, svelte_virtual_list_row, anchor);

			if (default_slot_or_fallback) {
				default_slot_or_fallback.m(svelte_virtual_list_row, null);
			}

			append_dev(svelte_virtual_list_row, t);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope, visible*/ 4112) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[12], dirty, get_default_slot_changes, get_default_slot_context);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot_or_fallback, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot_or_fallback, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(svelte_virtual_list_row);
			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(164:2) {#each visible as row (row.index)}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let svelte_virtual_list_viewport;
	let svelte_virtual_list_contents;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let svelte_virtual_list_viewport_resize_listener;
	let current;
	let mounted;
	let dispose;
	let each_value = /*visible*/ ctx[4];
	validate_each_argument(each_value);
	const get_key = ctx => /*row*/ ctx[23].index;
	validate_each_keys(ctx, each_value, get_each_context, get_key);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	const block = {
		c: function create() {
			svelte_virtual_list_viewport = element("svelte-virtual-list-viewport");
			svelte_virtual_list_contents = element("svelte-virtual-list-contents");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			svelte_virtual_list_viewport = claim_element(nodes, "SVELTE-VIRTUAL-LIST-VIEWPORT", { style: true, class: true });
			var svelte_virtual_list_viewport_nodes = children(svelte_virtual_list_viewport);
			svelte_virtual_list_contents = claim_element(svelte_virtual_list_viewport_nodes, "SVELTE-VIRTUAL-LIST-CONTENTS", { style: true, class: true });
			var svelte_virtual_list_contents_nodes = children(svelte_virtual_list_contents);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(svelte_virtual_list_contents_nodes);
			}

			svelte_virtual_list_contents_nodes.forEach(detach_dev);
			svelte_virtual_list_viewport_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(svelte_virtual_list_contents, "padding-top", /*top*/ ctx[5] + "px");
			set_style(svelte_virtual_list_contents, "padding-bottom", /*bottom*/ ctx[6] + "px");
			set_custom_element_data(svelte_virtual_list_contents, "class", "svelte-6oopgv");
			add_location(svelte_virtual_list_contents, file, 159, 1, 3402);
			set_style(svelte_virtual_list_viewport, "height", /*height*/ ctx[0]);
			set_custom_element_data(svelte_virtual_list_viewport, "class", "svelte-6oopgv");
			add_render_callback(() => /*svelte_virtual_list_viewport_elementresize_handler*/ ctx[16].call(svelte_virtual_list_viewport));
			add_location(svelte_virtual_list_viewport, file, 153, 0, 3256);
		},
		m: function mount(target, anchor) {
			insert_dev(target, svelte_virtual_list_viewport, anchor);
			append_dev(svelte_virtual_list_viewport, svelte_virtual_list_contents);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(svelte_virtual_list_contents, null);
			}

			/*svelte_virtual_list_contents_binding*/ ctx[14](svelte_virtual_list_contents);
			/*svelte_virtual_list_viewport_binding*/ ctx[15](svelte_virtual_list_viewport);
			svelte_virtual_list_viewport_resize_listener = add_resize_listener(svelte_virtual_list_viewport, /*svelte_virtual_list_viewport_elementresize_handler*/ ctx[16].bind(svelte_virtual_list_viewport));
			current = true;

			if (!mounted) {
				dispose = listen_dev(svelte_virtual_list_viewport, "scroll", /*handle_scroll*/ ctx[7], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$$scope, visible*/ 4112) {
				const each_value = /*visible*/ ctx[4];
				validate_each_argument(each_value);
				group_outros();
				validate_each_keys(ctx, each_value, get_each_context, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, svelte_virtual_list_contents, outro_and_destroy_block, create_each_block, null, get_each_context);
				check_outros();
			}

			if (!current || dirty & /*top*/ 32) {
				set_style(svelte_virtual_list_contents, "padding-top", /*top*/ ctx[5] + "px");
			}

			if (!current || dirty & /*bottom*/ 64) {
				set_style(svelte_virtual_list_contents, "padding-bottom", /*bottom*/ ctx[6] + "px");
			}

			if (!current || dirty & /*height*/ 1) {
				set_style(svelte_virtual_list_viewport, "height", /*height*/ ctx[0]);
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(svelte_virtual_list_viewport);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			/*svelte_virtual_list_contents_binding*/ ctx[14](null);
			/*svelte_virtual_list_viewport_binding*/ ctx[15](null);
			svelte_virtual_list_viewport_resize_listener();
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("VirtualList", slots, ['default']);
	let { items } = $$props;
	let { height = "100%" } = $$props;
	let { itemHeight = undefined } = $$props;
	let foo;
	let { start = 0 } = $$props;
	let { end = 0 } = $$props;

	// local state
	let height_map = [];

	let rows;
	let viewport;
	let contents;
	let viewport_height = 0;
	let visible;
	let mounted;
	let top = 0;
	let bottom = 0;
	let average_height;

	async function refresh(items, viewport_height, itemHeight) {
		const { scrollTop } = viewport;
		await tick(); // wait until the DOM is up to date
		let content_height = top - scrollTop;
		let i = start;

		while (content_height < viewport_height && i < items.length) {
			let row = rows[i - start];

			if (!row) {
				$$invalidate(9, end = i + 1);
				await tick(); // render the newly visible row
				row = rows[i - start];
			}

			const row_height = height_map[i] = itemHeight || row.offsetHeight;
			content_height += row_height;
			i += 1;
		}

		$$invalidate(9, end = i);
		const remaining = items.length - end;
		average_height = (top + content_height) / end;
		$$invalidate(6, bottom = remaining * average_height);
		height_map.length = items.length;
	}

	async function handle_scroll() {
		const { scrollTop } = viewport;
		const old_start = start;

		for (let v = 0; v < rows.length; v += 1) {
			height_map[start + v] = itemHeight || rows[v].offsetHeight;
		}

		let i = 0;
		let y = 0;

		while (i < items.length) {
			const row_height = height_map[i] || average_height;

			if (y + row_height > scrollTop) {
				$$invalidate(8, start = i);
				$$invalidate(5, top = y);
				break;
			}

			y += row_height;
			i += 1;
		}

		while (i < items.length) {
			y += height_map[i] || average_height;
			i += 1;
			if (y > scrollTop + viewport_height) break;
		}

		$$invalidate(9, end = i);
		const remaining = items.length - end;
		average_height = y / end;
		while (i < items.length) height_map[i++] = average_height;
		$$invalidate(6, bottom = remaining * average_height);

		// prevent jumping if we scrolled up into unknown territory
		if (start < old_start) {
			await tick();
			let expected_height = 0;
			let actual_height = 0;

			for (let i = start; i < old_start; i += 1) {
				if (rows[i - start]) {
					expected_height += height_map[i];
					actual_height += itemHeight || rows[i - start].offsetHeight;
				}
			}

			const d = actual_height - expected_height;
			viewport.scrollTo(0, scrollTop + d);
		}
	} // TODO if we overestimated the space these
	// rows would occupy we may need to add some

	// more. maybe we can just call handle_scroll again?
	// trigger initial refresh
	onMount(() => {
		rows = contents.getElementsByTagName("svelte-virtual-list-row");
		$$invalidate(19, mounted = true);
	});

	const writable_props = ["items", "height", "itemHeight", "start", "end"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<VirtualList> was created with unknown prop '${key}'`);
	});

	function svelte_virtual_list_contents_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			contents = $$value;
			$$invalidate(2, contents);
		});
	}

	function svelte_virtual_list_viewport_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			viewport = $$value;
			$$invalidate(1, viewport);
		});
	}

	function svelte_virtual_list_viewport_elementresize_handler() {
		viewport_height = this.offsetHeight;
		$$invalidate(3, viewport_height);
	}

	$$self.$$set = $$props => {
		if ("items" in $$props) $$invalidate(10, items = $$props.items);
		if ("height" in $$props) $$invalidate(0, height = $$props.height);
		if ("itemHeight" in $$props) $$invalidate(11, itemHeight = $$props.itemHeight);
		if ("start" in $$props) $$invalidate(8, start = $$props.start);
		if ("end" in $$props) $$invalidate(9, end = $$props.end);
		if ("$$scope" in $$props) $$invalidate(12, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		onMount,
		tick,
		items,
		height,
		itemHeight,
		foo,
		start,
		end,
		height_map,
		rows,
		viewport,
		contents,
		viewport_height,
		visible,
		mounted,
		top,
		bottom,
		average_height,
		refresh,
		handle_scroll
	});

	$$self.$inject_state = $$props => {
		if ("items" in $$props) $$invalidate(10, items = $$props.items);
		if ("height" in $$props) $$invalidate(0, height = $$props.height);
		if ("itemHeight" in $$props) $$invalidate(11, itemHeight = $$props.itemHeight);
		if ("foo" in $$props) foo = $$props.foo;
		if ("start" in $$props) $$invalidate(8, start = $$props.start);
		if ("end" in $$props) $$invalidate(9, end = $$props.end);
		if ("height_map" in $$props) height_map = $$props.height_map;
		if ("rows" in $$props) rows = $$props.rows;
		if ("viewport" in $$props) $$invalidate(1, viewport = $$props.viewport);
		if ("contents" in $$props) $$invalidate(2, contents = $$props.contents);
		if ("viewport_height" in $$props) $$invalidate(3, viewport_height = $$props.viewport_height);
		if ("visible" in $$props) $$invalidate(4, visible = $$props.visible);
		if ("mounted" in $$props) $$invalidate(19, mounted = $$props.mounted);
		if ("top" in $$props) $$invalidate(5, top = $$props.top);
		if ("bottom" in $$props) $$invalidate(6, bottom = $$props.bottom);
		if ("average_height" in $$props) average_height = $$props.average_height;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*items, start, end*/ 1792) {
			$: $$invalidate(4, visible = items.slice(start, end).map((data, i) => {
				return { index: i + start, data };
			}));
		}

		if ($$self.$$.dirty & /*mounted, items, viewport_height, itemHeight*/ 527368) {
			// whenever `items` changes, invalidate the current heightmap
			$: if (mounted) refresh(items, viewport_height, itemHeight);
		}
	};

	return [
		height,
		viewport,
		contents,
		viewport_height,
		visible,
		top,
		bottom,
		handle_scroll,
		start,
		end,
		items,
		itemHeight,
		$$scope,
		slots,
		svelte_virtual_list_contents_binding,
		svelte_virtual_list_viewport_binding,
		svelte_virtual_list_viewport_elementresize_handler
	];
}

class VirtualList extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			items: 10,
			height: 0,
			itemHeight: 11,
			start: 8,
			end: 9
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "VirtualList",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*items*/ ctx[10] === undefined && !("items" in props)) {
			console.warn("<VirtualList> was created without expected prop 'items'");
		}
	}

	get items() {
		throw new Error("<VirtualList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set items(value) {
		throw new Error("<VirtualList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get height() {
		throw new Error("<VirtualList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set height(value) {
		throw new Error("<VirtualList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get itemHeight() {
		throw new Error("<VirtualList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set itemHeight(value) {
		throw new Error("<VirtualList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get start() {
		throw new Error("<VirtualList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set start(value) {
		throw new Error("<VirtualList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get end() {
		throw new Error("<VirtualList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set end(value) {
		throw new Error("<VirtualList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

const chunk = (list, chunkSize) => {
  const chunksAmount = Math.ceil(list.length / chunkSize);
  const result = [...Array(chunksAmount)].map((_, i) => list.slice(chunkSize * i, chunkSize + chunkSize * i));

  return result
};

var chunk_1 = chunk;

/* src/components/GameList.svelte generated by Svelte v3.29.7 */
const file$1 = "src/components/GameList.svelte";

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (24:0) {#if games.length === 0}
function create_if_block(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("No game to list. Try changing your search.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "No game to list. Try changing your search.");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(24:0) {#if games.length === 0}",
		ctx
	});

	return block;
}

// (31:6) {#each item as game}
function create_each_block$1(ctx) {
	let gameteaser;
	let current;

	gameteaser = new GameTeaser({
			props: { game: /*game*/ ctx[2] },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(gameteaser.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(gameteaser.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(gameteaser, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const gameteaser_changes = {};
			if (dirty & /*item*/ 2) gameteaser_changes.game = /*game*/ ctx[2];
			gameteaser.$set(gameteaser_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(gameteaser.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(gameteaser.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(gameteaser, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$1.name,
		type: "each",
		source: "(31:6) {#each item as game}",
		ctx
	});

	return block;
}

// (29:2) <VirtualList height='calc(100vh - 150px)' itemHeight={325} items={chunk(games, gamesTableColumns)} class='container' let:item>
function create_default_slot(ctx) {
	let div;
	let current;
	let each_value = /*item*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "row svelte-1lmw3e");
			add_location(div, file$1, 29, 4, 699);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*item*/ 2) {
				each_value = /*item*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$1(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$1(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(29:2) <VirtualList height='calc(100vh - 150px)' itemHeight={325} items={chunk(games, gamesTableColumns)} class='container' let:item>",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let t;
	let div;
	let virtuallist;
	let current;
	let if_block = /*games*/ ctx[0].length === 0 && create_if_block(ctx);

	virtuallist = new VirtualList({
			props: {
				height: "calc(100vh - 150px)",
				itemHeight: 325,
				items: chunk_1(/*games*/ ctx[0], gamesTableColumns),
				class: "container",
				$$slots: {
					default: [
						create_default_slot,
						({ item }) => ({ 1: item }),
						({ item }) => item ? 2 : 0
					]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			t = space();
			div = element("div");
			create_component(virtuallist.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			t = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(virtuallist.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "container svelte-1lmw3e");
			add_location(div, file$1, 27, 0, 542);
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, t, anchor);
			insert_dev(target, div, anchor);
			mount_component(virtuallist, div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (/*games*/ ctx[0].length === 0) {
				if (if_block) {
					
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(t.parentNode, t);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			const virtuallist_changes = {};
			if (dirty & /*games*/ 1) virtuallist_changes.items = chunk_1(/*games*/ ctx[0], gamesTableColumns);

			if (dirty & /*$$scope, item*/ 34) {
				virtuallist_changes.$$scope = { dirty, ctx };
			}

			virtuallist.$set(virtuallist_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(virtuallist.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(virtuallist.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(div);
			destroy_component(virtuallist);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const gamesTableColumns = 4;

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("GameList", slots, []);
	let { games } = $$props;
	const writable_props = ["games"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<GameList> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("games" in $$props) $$invalidate(0, games = $$props.games);
	};

	$$self.$capture_state = () => ({
		VirtualList,
		GameTeaser,
		chunk: chunk_1,
		games,
		gamesTableColumns
	});

	$$self.$inject_state = $$props => {
		if ("games" in $$props) $$invalidate(0, games = $$props.games);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [games];
}

class GameList extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { games: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "GameList",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*games*/ ctx[0] === undefined && !("games" in props)) {
			console.warn("<GameList> was created without expected prop 'games'");
		}
	}

	get games() {
		throw new Error("<GameList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set games(value) {
		throw new Error("<GameList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default GameList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZUxpc3QuZjFkMDNhYjUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3ZlbHRlanMvc3ZlbHRlLXZpcnR1YWwtbGlzdC9WaXJ0dWFsTGlzdC5zdmVsdGUiLCIuLi8uLi8uLi8uLi8uLi9zcmMvbWlzYy9jaHVuay5qcyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dhbWVMaXN0LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBvbk1vdW50LCB0aWNrIH0gZnJvbSAnc3ZlbHRlJztcblxuXHQvLyBwcm9wc1xuXHRleHBvcnQgbGV0IGl0ZW1zO1xuXHRleHBvcnQgbGV0IGhlaWdodCA9ICcxMDAlJztcblx0ZXhwb3J0IGxldCBpdGVtSGVpZ2h0ID0gdW5kZWZpbmVkO1xuXG5cdGxldCBmb287XG5cblx0Ly8gcmVhZC1vbmx5LCBidXQgdmlzaWJsZSB0byBjb25zdW1lcnMgdmlhIGJpbmQ6c3RhcnRcblx0ZXhwb3J0IGxldCBzdGFydCA9IDA7XG5cdGV4cG9ydCBsZXQgZW5kID0gMDtcblxuXHQvLyBsb2NhbCBzdGF0ZVxuXHRsZXQgaGVpZ2h0X21hcCA9IFtdO1xuXHRsZXQgcm93cztcblx0bGV0IHZpZXdwb3J0O1xuXHRsZXQgY29udGVudHM7XG5cdGxldCB2aWV3cG9ydF9oZWlnaHQgPSAwO1xuXHRsZXQgdmlzaWJsZTtcblx0bGV0IG1vdW50ZWQ7XG5cblx0bGV0IHRvcCA9IDA7XG5cdGxldCBib3R0b20gPSAwO1xuXHRsZXQgYXZlcmFnZV9oZWlnaHQ7XG5cblx0JDogdmlzaWJsZSA9IGl0ZW1zLnNsaWNlKHN0YXJ0LCBlbmQpLm1hcCgoZGF0YSwgaSkgPT4ge1xuXHRcdHJldHVybiB7IGluZGV4OiBpICsgc3RhcnQsIGRhdGEgfTtcblx0fSk7XG5cblx0Ly8gd2hlbmV2ZXIgYGl0ZW1zYCBjaGFuZ2VzLCBpbnZhbGlkYXRlIHRoZSBjdXJyZW50IGhlaWdodG1hcFxuXHQkOiBpZiAobW91bnRlZCkgcmVmcmVzaChpdGVtcywgdmlld3BvcnRfaGVpZ2h0LCBpdGVtSGVpZ2h0KTtcblxuXHRhc3luYyBmdW5jdGlvbiByZWZyZXNoKGl0ZW1zLCB2aWV3cG9ydF9oZWlnaHQsIGl0ZW1IZWlnaHQpIHtcblx0XHRjb25zdCB7IHNjcm9sbFRvcCB9ID0gdmlld3BvcnQ7XG5cblx0XHRhd2FpdCB0aWNrKCk7IC8vIHdhaXQgdW50aWwgdGhlIERPTSBpcyB1cCB0byBkYXRlXG5cblx0XHRsZXQgY29udGVudF9oZWlnaHQgPSB0b3AgLSBzY3JvbGxUb3A7XG5cdFx0bGV0IGkgPSBzdGFydDtcblxuXHRcdHdoaWxlIChjb250ZW50X2hlaWdodCA8IHZpZXdwb3J0X2hlaWdodCAmJiBpIDwgaXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRsZXQgcm93ID0gcm93c1tpIC0gc3RhcnRdO1xuXG5cdFx0XHRpZiAoIXJvdykge1xuXHRcdFx0XHRlbmQgPSBpICsgMTtcblx0XHRcdFx0YXdhaXQgdGljaygpOyAvLyByZW5kZXIgdGhlIG5ld2x5IHZpc2libGUgcm93XG5cdFx0XHRcdHJvdyA9IHJvd3NbaSAtIHN0YXJ0XTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgcm93X2hlaWdodCA9IGhlaWdodF9tYXBbaV0gPSBpdGVtSGVpZ2h0IHx8IHJvdy5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRjb250ZW50X2hlaWdodCArPSByb3dfaGVpZ2h0O1xuXHRcdFx0aSArPSAxO1xuXHRcdH1cblxuXHRcdGVuZCA9IGk7XG5cblx0XHRjb25zdCByZW1haW5pbmcgPSBpdGVtcy5sZW5ndGggLSBlbmQ7XG5cdFx0YXZlcmFnZV9oZWlnaHQgPSAodG9wICsgY29udGVudF9oZWlnaHQpIC8gZW5kO1xuXG5cdFx0Ym90dG9tID0gcmVtYWluaW5nICogYXZlcmFnZV9oZWlnaHQ7XG5cdFx0aGVpZ2h0X21hcC5sZW5ndGggPSBpdGVtcy5sZW5ndGg7XG5cblx0fVxuXG5cdGFzeW5jIGZ1bmN0aW9uIGhhbmRsZV9zY3JvbGwoKSB7XG5cdFx0Y29uc3QgeyBzY3JvbGxUb3AgfSA9IHZpZXdwb3J0O1xuXG5cdFx0Y29uc3Qgb2xkX3N0YXJ0ID0gc3RhcnQ7XG5cblx0XHRmb3IgKGxldCB2ID0gMDsgdiA8IHJvd3MubGVuZ3RoOyB2ICs9IDEpIHtcblx0XHRcdGhlaWdodF9tYXBbc3RhcnQgKyB2XSA9IGl0ZW1IZWlnaHQgfHwgcm93c1t2XS5vZmZzZXRIZWlnaHQ7XG5cdFx0fVxuXG5cdFx0bGV0IGkgPSAwO1xuXHRcdGxldCB5ID0gMDtcblxuXHRcdHdoaWxlIChpIDwgaXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCByb3dfaGVpZ2h0ID0gaGVpZ2h0X21hcFtpXSB8fCBhdmVyYWdlX2hlaWdodDtcblx0XHRcdGlmICh5ICsgcm93X2hlaWdodCA+IHNjcm9sbFRvcCkge1xuXHRcdFx0XHRzdGFydCA9IGk7XG5cdFx0XHRcdHRvcCA9IHk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdHkgKz0gcm93X2hlaWdodDtcblx0XHRcdGkgKz0gMTtcblx0XHR9XG5cblx0XHR3aGlsZSAoaSA8IGl0ZW1zLmxlbmd0aCkge1xuXHRcdFx0eSArPSBoZWlnaHRfbWFwW2ldIHx8IGF2ZXJhZ2VfaGVpZ2h0O1xuXHRcdFx0aSArPSAxO1xuXG5cdFx0XHRpZiAoeSA+IHNjcm9sbFRvcCArIHZpZXdwb3J0X2hlaWdodCkgYnJlYWs7XG5cdFx0fVxuXG5cdFx0ZW5kID0gaTtcblxuXHRcdGNvbnN0IHJlbWFpbmluZyA9IGl0ZW1zLmxlbmd0aCAtIGVuZDtcblx0XHRhdmVyYWdlX2hlaWdodCA9IHkgLyBlbmQ7XG5cblx0XHR3aGlsZSAoaSA8IGl0ZW1zLmxlbmd0aCkgaGVpZ2h0X21hcFtpKytdID0gYXZlcmFnZV9oZWlnaHQ7XG5cdFx0Ym90dG9tID0gcmVtYWluaW5nICogYXZlcmFnZV9oZWlnaHQ7XG5cblx0XHQvLyBwcmV2ZW50IGp1bXBpbmcgaWYgd2Ugc2Nyb2xsZWQgdXAgaW50byB1bmtub3duIHRlcnJpdG9yeVxuXHRcdGlmIChzdGFydCA8IG9sZF9zdGFydCkge1xuXHRcdFx0YXdhaXQgdGljaygpO1xuXG5cdFx0XHRsZXQgZXhwZWN0ZWRfaGVpZ2h0ID0gMDtcblx0XHRcdGxldCBhY3R1YWxfaGVpZ2h0ID0gMDtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgb2xkX3N0YXJ0OyBpICs9MSkge1xuXHRcdFx0XHRpZiAocm93c1tpIC0gc3RhcnRdKSB7XG5cdFx0XHRcdFx0ZXhwZWN0ZWRfaGVpZ2h0ICs9IGhlaWdodF9tYXBbaV07XG5cdFx0XHRcdFx0YWN0dWFsX2hlaWdodCArPSBpdGVtSGVpZ2h0IHx8IHJvd3NbaSAtIHN0YXJ0XS5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZCA9IGFjdHVhbF9oZWlnaHQgLSBleHBlY3RlZF9oZWlnaHQ7XG5cdFx0XHR2aWV3cG9ydC5zY3JvbGxUbygwLCBzY3JvbGxUb3AgKyBkKTtcblx0XHR9XG5cblx0XHQvLyBUT0RPIGlmIHdlIG92ZXJlc3RpbWF0ZWQgdGhlIHNwYWNlIHRoZXNlXG5cdFx0Ly8gcm93cyB3b3VsZCBvY2N1cHkgd2UgbWF5IG5lZWQgdG8gYWRkIHNvbWVcblx0XHQvLyBtb3JlLiBtYXliZSB3ZSBjYW4ganVzdCBjYWxsIGhhbmRsZV9zY3JvbGwgYWdhaW4/XG5cdH1cblxuXHQvLyB0cmlnZ2VyIGluaXRpYWwgcmVmcmVzaFxuXHRvbk1vdW50KCgpID0+IHtcblx0XHRyb3dzID0gY29udGVudHMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3N2ZWx0ZS12aXJ0dWFsLWxpc3Qtcm93Jyk7XG5cdFx0bW91bnRlZCA9IHRydWU7XG5cdH0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0c3ZlbHRlLXZpcnR1YWwtbGlzdC12aWV3cG9ydCB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdG92ZXJmbG93LXk6IGF1dG87XG5cdFx0LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdH1cblxuXHRzdmVsdGUtdmlydHVhbC1saXN0LWNvbnRlbnRzLCBzdmVsdGUtdmlydHVhbC1saXN0LXJvdyB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdH1cblxuXHRzdmVsdGUtdmlydHVhbC1saXN0LXJvdyB7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZS12aXJ0dWFsLWxpc3Qtdmlld3BvcnRcblx0YmluZDp0aGlzPXt2aWV3cG9ydH1cblx0YmluZDpvZmZzZXRIZWlnaHQ9e3ZpZXdwb3J0X2hlaWdodH1cblx0b246c2Nyb2xsPXtoYW5kbGVfc2Nyb2xsfVxuXHRzdHlsZT1cImhlaWdodDoge2hlaWdodH07XCJcbj5cblx0PHN2ZWx0ZS12aXJ0dWFsLWxpc3QtY29udGVudHNcblx0XHRiaW5kOnRoaXM9e2NvbnRlbnRzfVxuXHRcdHN0eWxlPVwicGFkZGluZy10b3A6IHt0b3B9cHg7IHBhZGRpbmctYm90dG9tOiB7Ym90dG9tfXB4O1wiXG5cdD5cblx0XHR7I2VhY2ggdmlzaWJsZSBhcyByb3cgKHJvdy5pbmRleCl9XG5cdFx0XHQ8c3ZlbHRlLXZpcnR1YWwtbGlzdC1yb3c+XG5cdFx0XHRcdDxzbG90IGl0ZW09e3Jvdy5kYXRhfT5NaXNzaW5nIHRlbXBsYXRlPC9zbG90PlxuXHRcdFx0PC9zdmVsdGUtdmlydHVhbC1saXN0LXJvdz5cblx0XHR7L2VhY2h9XG5cdDwvc3ZlbHRlLXZpcnR1YWwtbGlzdC1jb250ZW50cz5cbjwvc3ZlbHRlLXZpcnR1YWwtbGlzdC12aWV3cG9ydD5cbiIsImNvbnN0IGNodW5rID0gKGxpc3QsIGNodW5rU2l6ZSkgPT4ge1xuICBjb25zdCBjaHVua3NBbW91bnQgPSBNYXRoLmNlaWwobGlzdC5sZW5ndGggLyBjaHVua1NpemUpXG4gIGNvbnN0IHJlc3VsdCA9IFsuLi5BcnJheShjaHVua3NBbW91bnQpXS5tYXAoKF8sIGkpID0+IGxpc3Quc2xpY2UoY2h1bmtTaXplICogaSwgY2h1bmtTaXplICsgY2h1bmtTaXplICogaSkpXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNodW5rXG4iLCI8c2NyaXB0PlxuICBpbXBvcnQgVmlydHVhbExpc3QgZnJvbSAnQHN2ZWx0ZWpzL3N2ZWx0ZS12aXJ0dWFsLWxpc3QnXG4gIGltcG9ydCBHYW1lVGVhc2VyIGZyb20gJy4vR2FtZVRlYXNlci5zdmVsdGUnXG4gIGltcG9ydCBjaHVuayBmcm9tICcuLi9taXNjL2NodW5rJ1xuXG4gIGV4cG9ydCBsZXQgZ2FtZXNcblxuICBjb25zdCBnYW1lc1RhYmxlQ29sdW1ucyA9IDRcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5jb250YWluZXIge1xuICAgIHNjcm9sbGJhci1jb2xvcjogIzU1NTU2MSAjODA4MDg3O1xuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgfVxuXG4gIC5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuPC9zdHlsZT5cblxueyNpZiBnYW1lcy5sZW5ndGggPT09IDB9XG4gIE5vIGdhbWUgdG8gbGlzdC4gVHJ5IGNoYW5naW5nIHlvdXIgc2VhcmNoLlxuey9pZn1cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICA8VmlydHVhbExpc3QgaGVpZ2h0PSdjYWxjKDEwMHZoIC0gMTUwcHgpJyBpdGVtSGVpZ2h0PXszMjV9IGl0ZW1zPXtjaHVuayhnYW1lcywgZ2FtZXNUYWJsZUNvbHVtbnMpfSBjbGFzcz0nY29udGFpbmVyJyBsZXQ6aXRlbT5cbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxuICAgICAgeyNlYWNoIGl0ZW0gYXMgZ2FtZX1cbiAgICAgICAgPEdhbWVUZWFzZXIgZ2FtZT17Z2FtZX0gLz5cbiAgICAgIHsvZWFjaH1cbiAgICA8L2Rpdj5cbiAgPC9WaXJ0dWFsTGlzdD5cbjwvZGl2PlxuIl0sIm5hbWVzIjpbImNodW5r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
