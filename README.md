# Diplomat

App para auxiliar na tradução de arquivos stringtable.xml de módulos de ArmA 3 de forma prática e intuitiva.


## Exemplo de um stringtable.xml:
*Fonte: [Bohemia Interactive](https://community.bistudio.com/wiki/Stringtable.xml)*
```xml
<?xml version="1.0" encoding="utf-8" ?>
<Project name="Any Name">
	<Package name="Mission One">
		<Container name="Some Words">
			<Key ID="STR_TAG_Yes">
				<Original>yes</Original>
				<English>yes</English>
				<Czech>ano</Czech>
				<French>oui</French>
				<German>ja</German>
				<Italian>sì</Italian>
				<Polish>tak</Polish>
				<Portuguese>sim</Portuguese>
				<Russian>да</Russian>
				<Spanish>sí</Spanish>
				<Korean>네</Korean>
				<Japanese>はい</Japanese>
				<Chinesesimp>是</Chinesesimp>
				<Chinese>是（繁體）</Chinese>
			</Key>
			<Key ID="STR_TAG_No">
				<Original>no</Original>
			</Key>
		</Container>
		<Container name="Another Container">
			<Key ID="STR_TAG_formatted">
				<Original>Hello, %1.</Original>
			</Key>
			<Key ID="STR_TAG_structuredText">
				<Original>Some text &lt;t color='%1'&gt;%2&lt;/t&gt;</Original>
			</Key>
		</Container>
	</Package>
</Project>
```