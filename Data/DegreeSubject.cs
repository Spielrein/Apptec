//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class DegreeSubject
    {
        public int DegreeSubjectsID { get; set; }
        public int DegreeID { get; set; }
        public int SubjectsID { get; set; }
        public System.DateTime DateTimeCreation { get; set; }
        public System.DateTime DateTimeModification { get; set; }
        public string UserCreation { get; set; }
        public string UserModification { get; set; }
        public string Status { get; set; }
    
        public virtual Degree Degree { get; set; }
        public virtual Subject Subject { get; set; }
    }
}
