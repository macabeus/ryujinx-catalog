import { J as create_component, K as claim_component, L as mount_component, q as transition_in, r as transition_out, M as destroy_component, h as dispatch_dev, w as validate_each_argument, e as element, c as claim_element, a as children, d as detach_dev, b as attr_dev, f as add_location, i as insert_dev, C as group_outros, F as check_outros, N as destroy_each, v as validate_slots, S as SvelteComponentDev, j as init, s as safe_not_equal } from '../index-96466d9a.js';
import '../tagsFilter-23b6c8d4.js';
import Tag from './Tag.4a56e822.js';

/* src/components/Tags.svelte generated by Svelte v3.29.7 */
const file = "src/components/Tags.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (14:2) {#each tags as tag}
function create_each_block(ctx) {
	let tag;
	let current;

	tag = new Tag({
			props: { tag: /*tag*/ ctx[1] },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(tag.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(tag.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(tag, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const tag_changes = {};
			if (dirty & /*tags*/ 1) tag_changes.tag = /*tag*/ ctx[1];
			tag.$set(tag_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tag.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tag.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(tag, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(14:2) {#each tags as tag}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div;
	let current;
	let each_value = /*tags*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
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
			attr_dev(div, "class", "tags");
			add_location(div, file, 12, 0, 214);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*tags*/ 1) {
				each_value = /*tags*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
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
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Tags", slots, []);
	let { tags } = $$props;
	const writable_props = ["tags"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Tags> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("tags" in $$props) $$invalidate(0, tags = $$props.tags);
	};

	$$self.$capture_state = () => ({ Tag, tags });

	$$self.$inject_state = $$props => {
		if ("tags" in $$props) $$invalidate(0, tags = $$props.tags);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [tags];
}

class Tags extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { tags: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Tags",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*tags*/ ctx[0] === undefined && !("tags" in props)) {
			console.warn("<Tags> was created without expected prop 'tags'");
		}
	}

	get tags() {
		throw new Error("<Tags>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set tags(value) {
		throw new Error("<Tags>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Tags;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFncy43ZmUyNWFhZi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVGFncy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IFRhZyBmcm9tICcuL1RhZy5zdmVsdGUnXG5cbiAgZXhwb3J0IGxldCB0YWdzXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICA6Z2xvYmFsKC50YWdzID4gc3Bhbjpub3QoOmZpcnN0LWNoaWxkKSkge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJ0YWdzXCI+XG4gIHsjZWFjaCB0YWdzIGFzIHRhZ31cbiAgICA8VGFnIHt0YWd9IC8+XG4gIHsvZWFjaH1cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBYVMsR0FBSTs7OztnQ0FBVCxNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFBQyxHQUFJOzs7OytCQUFULE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQUosTUFBSTs7Ozs7Ozs7OztrQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQVZLLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
