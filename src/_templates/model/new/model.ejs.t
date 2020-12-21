---
to: src/Models/<%= name %>/index.ts
---
import axios from 'axios';
import { T<%= name %> } from './@types';
import <%= baseModel %> from 'BaseModels/<%= baseModel %>'

class <%= name %>Model extends <%= baseModel %> {

    
}

export default <%= name %>Model;
