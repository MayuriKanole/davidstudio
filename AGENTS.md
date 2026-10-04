<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep shared studio content in `src/lib/studio-data.ts` so every route preserves one authoritative set of games, people, links, and copy.
- Use dedicated content routes under `src/routes` with the shared `SiteShell`; this preserves crawlable pages and consistent navigation.
