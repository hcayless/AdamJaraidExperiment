<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:t="http://www.tei-c.org/ns/1.0"
  xmlns="http://www.tei-c.org/ns/1.0"
  exclude-result-prefixes="xs"
  version="3.0">
  <xsl:output indent="yes"/>

  <!-- This just speeds up the process of grabbing rows by <abbr> a little -->
  <xsl:key name="INSTITUTIONS" match="t:abbr" use="t:abbr/normalize-space()"/>

  <!-- This is another key to select the references to Institution IDs in cell 9-->
  <xsl:key name="INSTITUTIONIDS" match="t:div[type="abbr"]" use="p@xml:id/normalize-space()"/>"

  <!-- "Identity transform" template. Copies everything but the <text> -->
  <xsl:template match="node()|@*|*|processing-instruction()|comment()">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*|*|processing-instruction()|comment()"/>
    </xsl:copy>
  </xsl:template>

  <!-- Matches the <text> and puts in a list instead the original content-->
  <xsl:template match="t:text">
    <!-- Gets a list of abbreviations that occur in <abbr> -->
    <xsl:variable name="institutions" select="sort(distinct-values(//t:abbr/normalize-space()))"/>
    <!-- <xsl:for-each> changes the context (what's accessible to XPath).
      We want a copy so we can get back out of our place list when we're
      iterating over it to the main document -->
    <xsl:variable name="context" select="."/>
    <text>
      <body>
        <list xml:id="institutions" type="firstList">
          <head xml:id="headInstitutions">Holding Institutions</head>
          <xsl:for-each select="$institutions">
            <item n="1institutions"><abbr target="#{@xml:id}"><xsl:value-of select="."/></abbr>
              <list type="secondList">
                <!-- Go and get each cell 9 where xml:id of institution is and display the name in cell 4-->
                <xsl:for-each select="$context/key('INSTITUTIONIDS',current())">
                  <xsl:sort select="normalize-space(t:cell[@n='4'])"></xsl:sort>
                  <item><ref target="pages/chrono.html#{@xml:id}"><xsl:apply-templates select="t:cell[@n='4']/node()"/></ref></item>
                </xsl:for-each>
              </list>
            </item>
          </xsl:for-each>
        </list>
      </body>
    </text>
  </xsl:template>

  <xsl:template match="@full|@instant"/>

</xsl:stylesheet>
