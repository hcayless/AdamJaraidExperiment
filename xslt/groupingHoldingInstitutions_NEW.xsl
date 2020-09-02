<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:t="http://www.tei-c.org/ns/1.0"
  xmlns="http://www.tei-c.org/ns/1.0"
  exclude-result-prefixes="xs"
  version="3.0">
  <xsl:output indent="yes"/>

<!-- <xsl:key name="PLACES" match="t:row" use="t:cell[@n='5']/t:placeName/normalize-space()"/> -->

<!-- "Identity transform" template. Copies everything but the <text> -->
  <xsl:template match="node()|@*|*|processing-instruction()|comment()">
    <xsl:copy>
      <xsl:apply-templates select="node()|@*|*|processing-instruction()|comment()"/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="t:text">

    <text>
      <body>
        <list xml:id="institutions" type="firstList">
          <head xml:id="headINstitutions">Holding Institutions</head>
        <!-- grab each <abbr> in back-->
        <xsl:for-each select="t:back/t:div/t:p/t:abbr">
          <!-- create of each <abbr> an item -->
          <item n="1inst"><ref target="#{@xml:id}"><abbr><xsl:value-of select="."/></abbr></ref>
        </item>



      </xsl:for-each>


</list>
</body>
</text>
  </xsl:template>
</xsl:stylesheet>
