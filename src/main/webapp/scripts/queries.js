

/*
 * Copyright (c) 2013 EMBL - European Bioinformatics Institute
 * Licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

var exampleQueries = [

    {
        shortname : "Query 1",
        description: "Get all trait associations",
        query:
                "SELECT ?pubmedid ?trait ?traitlabel ?snplabel ?chromosome_number ?cytogeneticband ?position WHERE {\n" +
                "?study a gwasterms:Study ;\n" +
                "       gwasterms:has_pubmed_id ?pubmedid ;\n" +
                "       ro:has_part ?trait_association .\n" +

                "?trait_association oban:has_object ?trait ;\n" +
                "                   oban:has_subject ?snp . \n" +
                "?trait rdfs:label ?traitlabel .\n" +

                "?snp gwasterms:has_basepair_position ?position ;\n" +
                "     ro:located_in ?band ;\n" +
                "     rdfs:label ?snplabel .\n" +
                "?band rdfs:label ?cytogeneticband .\n" +
                "?band ro:part_of ?chromosome .\n" +
                "?chromosome gwasterms:has_name ?chromosome_number .\n" +
                "}"
    },
    {
        shortname : "Query 2",
        description: "Get all trait associations related to prostate carcinoma (efo:EFO_0001663)",
        query:
                "SELECT ?pubmedid ?trait ?traitlabel ?snplabel ?chromosome_number ?cytogeneticband ?position WHERE {\n" +
                "?study a gwasterms:Study ;\n" +
                "       gwasterms:has_pubmed_id ?pubmedid ;\n" +
                "       ro:has_part ?trait_association .\n" +

                "?trait_association oban:has_object ?trait ;\n" +
                "                   oban:has_subject ?snp . \n" +
                "?trait rdfs:label ?traitlabel .\n" +

                "?snp gwasterms:has_basepair_position ?position ;\n" +
                "     ro:located_in ?band ;\n" +
                "     rdfs:label ?snplabel .\n" +
                "?band rdfs:label ?cytogeneticband .\n" +
                "?band ro:part_of ?chromosome .\n" +
                "?chromosome gwasterms:has_name ?chromosome_number .\n" +
                "VALUES ?trait {efo:EFO_0001663} .\n" +

                "}"
    },
    {
        shortname : "Query 3",
        description: "Get all trait associations to snps on Chromosome 3",
        query:
                "SELECT ?pubmedid ?trait ?traitlabel ?snplabel ?chromosome_number ?cytogeneticband ?position WHERE {\n" +
                "?study a gwasterms:Study ;\n" +
                "       gwasterms:has_pubmed_id ?pubmedid ;\n" +
                "       ro:has_part ?trait_association .\n" +

                "?trait_association oban:has_object ?trait ;\n" +
                "                   oban:has_subject ?snp . \n" +
                "?trait rdfs:label ?traitlabel .\n" +

                "?snp gwasterms:has_basepair_position ?position ;\n" +
                "     ro:located_in ?band ;\n" +
                "     rdfs:label ?snplabel .\n" +
                "?band rdfs:label ?cytogeneticband .\n" +
                "?band ro:part_of ?chromosome .\n" +
                "?chromosome gwasterms:has_name ?chromosome_number .\n" +
                "VALUES ?chromosome {<http://rdf.ebi.ac.uk/dataset/gwas/Chromosome/3>} .\n" +

                "}"
    }
]