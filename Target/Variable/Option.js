var e = (await import("typescript-esbuild/Target/Function/Merge.js")).default(
	(await import("files-pipe/Target/Variable/Option.js")).default,
	{
		Critters: (await import("../Variable/Critters.js")).default,
		Action: {
			Failed: async (t) => `Error: Cannot inline file ${t.Input}!`,
			Fulfilled: async ({ Files: t }) =>
				t > 0
					? `Successfully inlined a total of ${t} HTML ${
							t === 1 ? "file" : "files"
					  }.`
					: !1,
			Accomplished: !1,
		},
	},
);
export { e as default };
