import { e as element, t as text, c as claim_element, a as children, m as claim_text, d as detach_dev, b as attr_dev, O as null_to_empty, f as add_location, i as insert_dev, g as append_dev, B as listen_dev, P as set_data_dev, n as noop, h as dispatch_dev, v as validate_slots, Q as getContext, S as SvelteComponentDev, j as init, s as safe_not_equal } from '../index-96466d9a.js';
import { t as tagsFilter } from '../tagsFilter-23b6c8d4.js';

/* src/components/Tag.svelte generated by Svelte v3.29.7 */
const file = "src/components/Tag.svelte";

function create_fragment(ctx) {
	let button;
	let t;
	let button_class_value;
	let button_disabled_value;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			t = text(/*tag*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true, disabled: true });
			var button_nodes = children(button);
			t = claim_text(button_nodes, /*tag*/ ctx[0]);
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", button_class_value = "" + (null_to_empty(`tag ${/*tag*/ ctx[0]} ${/*hasTagsFilterContext*/ ctx[1] && "can-filter"}`) + " svelte-p4onnk"));
			button.disabled = button_disabled_value = /*hasTagsFilterContext*/ ctx[1] === false;
			add_location(button, file, 74, 0, 1147);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*onTagClick*/ ctx[2], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*tag*/ 1) set_data_dev(t, /*tag*/ ctx[0]);

			if (dirty & /*tag*/ 1 && button_class_value !== (button_class_value = "" + (null_to_empty(`tag ${/*tag*/ ctx[0]} ${/*hasTagsFilterContext*/ ctx[1] && "can-filter"}`) + " svelte-p4onnk"))) {
				attr_dev(button, "class", button_class_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
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
	validate_slots("Tag", slots, []);
	let { tag } = $$props;
	const tagsFilterContext = getContext(tagsFilter.key);
	const hasTagsFilterContext = tagsFilterContext !== undefined;
	const onTagClick = () => tagsFilterContext.toggleTag(tag);
	const writable_props = ["tag"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Tag> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("tag" in $$props) $$invalidate(0, tag = $$props.tag);
	};

	$$self.$capture_state = () => ({
		getContext,
		key: tagsFilter.key,
		tag,
		tagsFilterContext,
		hasTagsFilterContext,
		onTagClick
	});

	$$self.$inject_state = $$props => {
		if ("tag" in $$props) $$invalidate(0, tag = $$props.tag);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [tag, hasTagsFilterContext, onTagClick];
}

class Tag extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { tag: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Tag",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*tag*/ ctx[0] === undefined && !("tag" in props)) {
			console.warn("<Tag> was created without expected prop 'tag'");
		}
	}

	get tag() {
		throw new Error("<Tag>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set tag(value) {
		throw new Error("<Tag>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Tag;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFnLjRhNTZlODIyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9UYWcuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tICdzdmVsdGUnXG4gIGltcG9ydCB7IGtleSB9IGZyb20gJy4uL2NvbnRleHRzL3RhZ3NGaWx0ZXInXG5cbiAgZXhwb3J0IGxldCB0YWdcblxuICBjb25zdCB0YWdzRmlsdGVyQ29udGV4dCA9IGdldENvbnRleHQoa2V5KVxuXG4gIGNvbnN0IGhhc1RhZ3NGaWx0ZXJDb250ZXh0ID0gKHRhZ3NGaWx0ZXJDb250ZXh0ICE9PSB1bmRlZmluZWQpXG5cbiAgY29uc3Qgb25UYWdDbGljayA9ICgpID0+XG4gICAgdGFnc0ZpbHRlckNvbnRleHQudG9nZ2xlVGFnKHRhZylcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC50YWcge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjQ1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxcHggM3B4O1xuXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMnMgZWFzZS1vdXQ7XG4gIH1cblxuICAudGFnLmNhbi1maWx0ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC50YWcuY2FuLWZpbHRlcjpob3ZlciB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyMCUpO1xuICB9XG5cbiAgLnRhZy5hdWRpbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBOTlEOTtcbiAgfVxuXG4gIC50YWcucGxheWFibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRERFOUM7XG4gIH1cblxuICAudGFnLmNyYXNoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2MzQ3O1xuICB9XG5cbiAgLnRhZy5ib290cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M5RDFBMTtcbiAgfVxuXG4gIC50YWcuZ3B1IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTczOUVEO1xuICB9XG5cbiAgLnRhZy5zbG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTA2MDREO1xuICB9XG5cbiAgLnRhZy5tZW51cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I2Q0M3ODtcbiAgfVxuXG4gIC50YWcucmVncmVzc2lvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UwNzk1QztcbiAgfVxuXG4gIC50YWcuaW5nYW1lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEVFMDhBO1xuICB9XG48L3N0eWxlPlxuXG48YnV0dG9uXG4gIGNsYXNzPXtgdGFnICR7dGFnfSAke2hhc1RhZ3NGaWx0ZXJDb250ZXh0ICYmICdjYW4tZmlsdGVyJ31gfVxuICBkaXNhYmxlZD17aGFzVGFnc0ZpbHRlckNvbnRleHQgPT09IGZhbHNlfVxuICBvbjpjbGljaz17b25UYWdDbGlja31cbj5cbiAge3RhZ31cbjwvYnV0dG9uPlxuIl0sIm5hbWVzIjpbImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBK0VHLEdBQUc7Ozs7Ozt3Q0FBSCxHQUFHOzs7OztxRkFKVSxHQUFHLGdDQUFJLEdBQW9CLE9BQUksWUFBWTtzRUFDL0MsR0FBb0IsUUFBSyxLQUFLOzs7Ozs7Ozt5REFDOUIsR0FBVTs7Ozs7a0RBRW5CLEdBQUc7OzRHQUpVLEdBQUcsZ0NBQUksR0FBb0IsT0FBSSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F2RTlDLEdBQUc7T0FFUixpQkFBaUIsR0FBRyxVQUFVLENBQUNBLGNBQUc7T0FFbEMsb0JBQW9CLEdBQUksaUJBQWlCLEtBQUssU0FBUztPQUV2RCxVQUFVLFNBQ2QsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
