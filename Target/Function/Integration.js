import h from "critters";
var w = (...[r = {}]) => {
	Object.entries(r).forEach(([t, e]) =>
		Object.defineProperty(r, t, { value: e === !0 ? c[t] : r[t] }),
	);
	const {
			Action: p,
			Cache: a,
			Critters: n,
			Exclude: u,
			Logger: f,
			Path: o,
		} = s(c, r),
		i = new Set();
	if (typeof o < "u" && (Array.isArray(o) || o instanceof Set))
		for (const t of o) i.add(t);
	return {
		name: "astro-critters",
		hooks: {
			"astro:build:done": async ({ dir: t }) => {
				if (
					(i.size || i.add(t),
					typeof a == "object" && a.Search === m && (a.Search = t),
					!!n)
				)
					for (const e of i) {
						const y = new h(
							s(n, {
								path:
									e instanceof Map
										? e.keys().next().value
										: e,
								logLevel: (() => {
									switch (f) {
										case 0:
											return "silent";
										case 1:
											return "silent";
										case 2:
											return "info";
										default:
											return "info";
									}
								})(),
							}),
						);
						await (
							await (
								await (
									await new (
										await import("files-pipe")
									).default(a, f).In(e)
								).By("**/*.html")
							).Not(u)
						).Pipe(
							s(p, {
								Wrote: async ({ Buffer: l }) =>
									y.process(l.toString()),
							}),
						);
					}
			},
		},
	};
};
const { default: c } = await import("../Variable/Option.js"),
	{
		default: { Cache: { Search: m } },
	} = await import("files-pipe/Target/Variable/Option.js"),
	{ default: s } = await import(
		"typescript-esbuild/Target/Function/Merge.js"
	);
export { c as Default, s as Merge, m as Search, w as default };
